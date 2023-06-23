import { Component } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-addinventory',
  templateUrl: './addinventory.component.html',
  styleUrls: ['./addinventory.component.css']
})
export class AddinventoryComponent {
  myForm: FormGroup;
  hidep = true;
  hidec = true;
  submitted = false; // Flag to track form submission
  currentDate !: Date;

  UserDetails:any[]=[];
  ngOnInit(){
  }

  idnameFormControl = new FormControl('', Validators.required);
  cnameFormControl = new FormControl('', Validators.required);
  inameFormControl = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);
  quality = new FormControl('', Validators.required);
  Seller = new FormControl('', Validators.required);
  dFormControl = new FormControl('', Validators.required);
  sFormControl = new FormControl('', Validators.required);
  sdFormControl = new FormControl('', Validators.required);

  constructor(private _api: DetailsService, private router:Router, ) {
 
    this.myForm = new FormGroup({
      Category_id: this.idnameFormControl,
      category_Name: this.cnameFormControl,
      inventory_name: this.inameFormControl,
      price: this.price,
      quantity: this.quality,
      seller: this.Seller,
      description: this.dFormControl,
      sold_items: this.sFormControl,
      sold_date: this.sdFormControl,
    });
    this.currentDate = new Date();

  }
 

  submitForm() {
    this.submitted = true; // Set submitted flag to true
    if (this.isFormValid() ) {
      const userData = {
        category_id: this.idnameFormControl.value,
        category_Name: this.cnameFormControl.value,
        inventory_name: this.inameFormControl.value,
        price: this.price.value,
        quantity: this.quality.value,
        seller:this.Seller.value,
        description:this.dFormControl.value,
        sold_items:this.sFormControl.value,
        sold_date:this.sdFormControl.value,
      };
      console.log(userData);
      this._api.UserSignUp(userData).subscribe({
        next: (res) => {
          this.UserDetails.push(userData);
          
        }
      });
    } else {
      // Display error or validation messages
      console.log('Form validation failed!');
    }
  }

  isFormValid(): boolean {
    const isValid = this.myForm.valid; // Check if the form is valid

    if (!isValid) {
      // Mark all form controls as touched to display validation errors
      Object.keys(this.myForm.controls).forEach(key => {
        this.myForm.controls[key].markAsTouched();
      });
    }

    return isValid;
  }

}


