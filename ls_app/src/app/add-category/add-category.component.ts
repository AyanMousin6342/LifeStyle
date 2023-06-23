import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { category } from '../Models/categories.model';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  @Input() Category: category;
  @Output() onRemovecategory = new EventEmitter<number>();
  @Output() onEditcategory = new EventEmitter<number>();
  name = new FormControl('', Validators.required);

  categoryForm: FormGroup;
  inventories: any[] = [];
  selectedCategoryid: number | null = null;
  selectedCategoryId: number | null | undefined;
  selectedCategory: category | null = null;


  categoryDetails: any[] = [];
 
  constructor(
    private detailservice: DetailsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

   

    this.Category = {
      category_name: '',
      category_image: ''
    };

    this.categoryForm = this.formBuilder.group({
      category_name: ['', Validators.required],
      category_image: ['', Validators.required]
    });
  }

  fileInput: any;

  onFileSelected(event: any) {
    this.fileInput = event.target.files[0];
  }

  ngOnInit(): void {
    this.loadCategory();
  }

  loadCategory() {
    this.detailservice.getCategories().subscribe((res) => {
      this.categoryDetails = res;
    });
  }

 viewInventorie(category_id: number) {
  this.detailservice
    .getInventories(category_id)
    .subscribe(
      (inventories: any[]) => {
        this.inventories = inventories;
        this.selectedCategoryid = category_id;
        this.router.navigate(['/userinventory', category_id]);
        console.log('Inventories:', inventories); // Add this line
      },
      (error) => {
        console.error('Error:', error);
      }
    );
}


  deleteClicked(categoryId: number): void {
    const categoryIdString = categoryId.toString(); // Convert the number to a string

    this.detailservice.deleteCategory(categoryIdString).subscribe(
      () => {
        this.loadCategory();
      },
      (error) => {
        console.error('Failed to delete category:', error);
      }
    );
  }
// Inside the AddCategoryComponent class

editClicked(): void {
  console.log('saaaads');
}

}
