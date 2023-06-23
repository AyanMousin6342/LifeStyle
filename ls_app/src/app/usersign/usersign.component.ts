import { Component } from '@angular/core';

import { DetailsService } from '../details.service';

import { Router } from '@angular/router';




@Component({

  selector: 'app-usersign',

  templateUrl: './usersign.component.html',

  styleUrls: ['./usersign.component.css']

})

export class UsersignComponent {

  signupData = {

    firstname: '',

    lastname: '',

    email: '',

    password: '',

    category_name: ''

  };




  constructor(private userService: DetailsService, private router: Router) {}




  onSignupSubmit() {

    if (this.isEmailInvalid() || this.isPasswordInvalid()) {

      return;

    }




    this.userService.signup(this.signupData).subscribe(

      response => {

        this.router.navigate(['/userlogin']);

      },

      error => {

        console.error('Signup error:', error);

      }

    );

  }




  isEmailInvalid() {

    const email = this.signupData.email;

    return email && !/\S+@\S+\.\S+/.test(email);

  }




  isPasswordInvalid() {

    const password = this.signupData.password;

    return password && (password.length < 6 || password.length > 15);

  }

}