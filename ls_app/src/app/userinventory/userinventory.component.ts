import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsercategoryService } from '../usercategory.service';



@Component({
  selector: 'app-userinventory',
  templateUrl: './userinventory.component.html',
  styleUrls: ['./userinventory.component.css']
})
export class UserinventoryComponent implements OnInit {
  // selectedCategoryid: number | null = null;

  inven: any [] = [];
  currentUrl: string;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private categoryService: UsercategoryService
  ) {
 this.currentUrl = this.router.url;
 const parts = this.currentUrl.split('/');
 const cid=  parts[parts.length - 1];
 this.viewInventories(parseInt(cid));

 
  }

  ngOnInit(): void {
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
