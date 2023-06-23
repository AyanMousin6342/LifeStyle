import { Component, OnInit } from '@angular/core';

import { UsercategoryService } from '../usercategory.service';

import { Router } from '@angular/router';




@Component({

  selector: 'app-userdashboard',

  templateUrl: './userdashboard.component.html',

  styleUrls: ['./userdashboard.component.css']

})

export class UserdashboardComponent implements OnInit {




  selectedCategoryId: number | null = null;

  inventories: any[] = [];

  categories: any[] = [];
  categoryDetails:any[]=[];



  constructor(private categoryService: UsercategoryService,private router: Router) {}




  ngOnInit(): void {

    this.getCategories();

  }




  getCategories(): void {

    this.categoryService.getCategories().subscribe(

      (categories: any[]) => {

        this.categories = categories;

      },

      (error) => {

        console.log(error);

      }

    );

  }

//   searchCategories(searchTerm: string): void {
//     this.categoryService.getCategoriesByName(searchTerm).subscribe(
//       (response: category[]) => {
//         this.categories = response;
//       },
//       (error) => {
//         console.error('Failed to fetch categories:', error);
//       }
//     );
// }

  viewInventories(categoryId: number) {

    this.categoryService.GetInventoriesByCategoryId(categoryId).subscribe(
      (inventories: any[]) => {
        this.inventories = inventories;
          this.selectedCategoryId = categoryId;
            this.router.navigate(['/inventory', categoryId]);
           },
              (error) => {
                console.error('Error:', error);
              });
            }

            feedback = {

              email: '',
          
              feedback: ''
          
            };
            submitFeedback() {
              alert("DDKDK")
              this.categoryService.createFeedback(this.feedback)
                .subscribe(() => {
                  alert('Feedback submitted successfully');
                  // Reset the form
                  this.feedback = {
                    email: '',
                    feedback: ''
                  };
                }, (error) => {
                  console.error('Failed to submit feedback', error);
                });
          
            }
}