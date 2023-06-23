import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css'],
})
export class InventoriesComponent {
  myForm: FormGroup;

  submitted = false; // Flag to track form submission
  usersDetails: any[] = [];

  UserDetails = {
    Category_id: null,
    cname: null,
    iname: null,
    price: null,
    quantity: null,
    seller: null,
    description: null,
    sold_items: null,
    sold_date: null,
  };

  idnameFormControl = new FormControl('', Validators.required);
  cnameFormControl = new FormControl('', Validators.required);
  inameFormControl = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);
  quality = new FormControl('', Validators.required);
  Seller = new FormControl('', Validators.required);
  dFormControl = new FormControl('', Validators.required);
  sFormControl = new FormControl(null, Validators.required);
  sdFormControl = new FormControl(null, Validators.required);

  ngOnInit() {
    this.fetchUserDetails();
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _api: DetailsService,
    private router: Router,
    private dialogRef: MatDialogRef<InventoriesComponent>
  ) {
    this.myForm = new FormGroup({
      idnameFormControl: this.idnameFormControl,
      cnameFormControl: this.cnameFormControl,
      inameFormControl: this.inameFormControl,
      price: this.price,
      quality: this.quality,
      Seller: this.Seller,
      dFormControl: this.dFormControl,
      sFormControl: this.sFormControl,
      sdFormControl: this.sdFormControl,
    });
  }

  fetchUserDetails() {
    this._api.getSingleUserDetails(this.data.record_id).subscribe((data) => {
      const user = data;
      this.myForm.patchValue({
        idnameFormControl: user.category_id,
        cnameFormControl: user.category_name,
        inameFormControl: user.inventory_name,
        price: user.price,
        quality: user.quantity,
        Seller: user.seller,
        dFormControl: user.description,
        sFormControl: user.sold_items,
        sdFormControl: user.sold_date,
      });
    });
  }

  submitForm() {
    this.submitted = true; // Set submitted flag to true
    this.myForm.markAllAsTouched();
    if (this.isFormValid()) {
      const userData = {
        category_id: this.idnameFormControl.value,
        category_name: this.cnameFormControl.value,
        inventory_name: this.inameFormControl.value,
        price: this.price.value,
        quantity: this.quality.value,
        seller: this.Seller.value,
        description: this.dFormControl.value,
        sold_items: this.sFormControl.value,
        sold_date: this.sdFormControl.value,
      };

      this._api.updateUserProfile(this.data.record_id, userData).subscribe(
        () => {
          this.dialogRef.close();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  isFormValid(): boolean {
    const isValid = this.myForm.valid;
    if (!isValid) {
      Object.keys(this.myForm.controls).forEach((key) => {
        this.myForm.controls[key].markAsTouched();
      });
    }
    return isValid;
  }

  closeDialogBox(event: Event) {
    event.preventDefault();
    this.dialogRef.close();
  }
}
