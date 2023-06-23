import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DetailsService } from '../details.service';

import { Router } from '@angular/router';

@Component({

  selector: 'app-adminlogin',

  templateUrl: './adminlogin.component.html',

  styleUrls: ['./adminlogin.component.css']

})

export class AdminloginComponent implements OnInit {

  constructor(private logg: DetailsService  , private router: Router) {}
  ngOnInit(): void {}
  loginForm = new FormGroup({
    Email: new FormControl("", [Validators.required, Validators.email]),
    Password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),

  });
isadminvalid:boolean=false;
loginsubmitted() {
const email = this.loginForm.value.Email ?? '';
const password = this.loginForm.value.Password ?? '';
this.logg.loginadmin([email, password]).subscribe(res=>{
if(res =='success'){
this.isadminvalid =true;
// alert("loginsucessful");
this.router.navigate(['/admindashboard']);
}
  else{
    this.isadminvalid =false;
      alert("loginunsucess");
      }
    });
  }
get Email(): FormControl {
return this.loginForm.get('Email') as FormControl;
 }

get Password(): FormControl {

    return this.loginForm.get('Password') as FormControl;

  }

}