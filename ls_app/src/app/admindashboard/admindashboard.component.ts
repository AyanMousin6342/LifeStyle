import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DetailsService } from '../details.service';
import { category } from '../Models/categories.model';
import { HttpClient } from '@angular/common/http';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  CategoryForm: FormGroup;
  categories: category[] = [];
  CategoryToDisplay: any[] = [];
  editedCategory: category | null = null;

  // form: NgForm ;
  name = new FormControl('', Validators.required);
  fileInput: any;
  searchTerm: string = "";
  selectedCategory: category | null = null;

  handleFileInput(event: any) {
    const file = event.target.files[0];
    console.log(file); // Do something with the selected file
  }
  onFileSelected(event: any) {
  
    this.fileInput = event.target.files[0];
  
  }

  @ViewChild(AddCategoryComponent) addCat!: AddCategoryComponent;

  constructor(
    private formBuilder: FormBuilder,
    private detailsService: DetailsService, // Add DetailsService dependency
    private http: HttpClient,
  ) {
    this.CategoryForm = this.formBuilder.group({
      category_name: [''],
      category_image: ['']
    });
  }

  ngOnInit(): void {
    this.searchCategories();
  }

  searchCategories(): void {
    const params = {
      name: this.searchTerm
    };
  
    this.http.get<any[]>('https://localhost:7186/api/Category', { params }).subscribe(
      (response: any[]) => {
        this.CategoryToDisplay = response.filter(category => category.name && category.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      },
      (error) => {
        console.error('Failed to fetch categories:', error.message);
      }
    );
  }
  addCategory(): void {
    const formData = new FormData();
    formData.append('name', this.name.value || "");
    formData.append('file', this.fileInput);
    this.http.post('https://localhost:7186/api/Category/upload', formData).subscribe(
      response => {
       this.addCat.loadCategory();
      },
      error => {
        console.error('An error occurred while uploading the file:', error);
      }
    );
  }
  editCategory(category: category): void {
    this.selectedCategory = { ...category }; // Make a copy of the selected category
    this.CategoryForm.setValue({
      category_name: this.selectedCategory.category_name,
      category_image: this.selectedCategory.category_image
    });
  } 
}


