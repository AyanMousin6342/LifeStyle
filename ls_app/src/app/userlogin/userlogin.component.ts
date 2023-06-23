import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControlName,FormControl, FormGroup, Validators } from '@angular/forms';

import { DetailsService } from '../details.service';

import { Router } from '@angular/router';




@Component({

  selector: 'app-userlogin',

  templateUrl: './userlogin.component.html',

  styleUrls: ['./userlogin.component.css']

})

export class UserloginComponent implements OnInit {

  constructor(private userService: DetailsService  , private router: Router) {}
  ngOnInit(): void {}
  loginform = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),

  });

  onLoginSubmit() {

    if (this.loginform.invalid) {
      return;
    }

    this.userService.login(this.loginform.value).subscribe(

      response => {

        this.router.navigate(['/userdashboard']);

      },

      error => {

        alert('Invalid username or password');

      }

    );

  }

}
