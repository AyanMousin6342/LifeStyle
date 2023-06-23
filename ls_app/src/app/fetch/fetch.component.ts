import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsercategoryService } from '../usercategory.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent {
  inven: any [] = [];

  
  constructor(
    private route: ActivatedRoute,
    private categoryService: UsercategoryService
  ) {}


  ngOnInit(): void {
    this.viewInventories(23);
  }

  viewInventories(categoryId: number) {
    this.categoryService.GetInventoriesByCategoryId2(categoryId).subscribe(
      (res: any[]) => {
        this.inven = res; // Assign the entire array to inven
        console.log('Inventory:', this.inven);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }  
}
