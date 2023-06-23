import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { DetailsService } from '../details.service';
import { InventoriesComponent } from '../inventories/inventories.component';
import { MatDialog } from '@angular/material/dialog';
import { AddinventoryComponent } from '../addinventory/addinventory.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UsercategoryService } from '../usercategory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  isDrawerOpen=true;

  usersDetails: any[]=[];
  inventories: any[] = [];
  selectedCategoryid: number | null = null;
  inven: any [] = [];
  currentUrl: string;
 cid:number;
constructor(private dialog:MatDialog,private categoryService: UsercategoryService, private _api:DetailsService,private route: ActivatedRoute,private router:Router) {
    
 this.currentUrl = this.router.url;
 const parts = this.currentUrl.split('/');
 const cidd=  parts[parts.length - 1];
 this.cid = parseInt(cidd);
  }

  ngOnInit(): void {
         
  

    this.getallUsers();
    }



  openDialog(id:number) {
    // alert(id);  
      const dialogRef = this.dialog.open(InventoriesComponent, {
        width: '700px',
        data: { record_id: id }
      });
      dialogRef.afterClosed().subscribe(() => {
        this.getallUsers();
      });
  }
  // getallUsers(){
  //     this._api.getAllUsersData().subscribe(
  //       (data) => {
  //         console.log(data);
  //         this.usersDetails = data;
  //       }
  //     );
  // }
  deleteUser(id:number){
    if(confirm('Are you sure you want to delete this user?')==true){
      this._api.deleleUserProfile(id).subscribe(()=>{
        this.getallUsers();
      },err=>{
        console.log(err);
      });
    }
  }
  
  openAddInventoryDialog(){
    this.dialog.open(AddinventoryComponent,{
      width:"30%"
    })
    .afterClosed().subscribe(() => {
      this.getallUsers();
    });
  }


  getallUsers() {

    this.categoryService.GetInventoriesByCategoryId2(this.cid).subscribe(
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
