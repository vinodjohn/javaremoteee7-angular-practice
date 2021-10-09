import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-login-signup',
    templateUrl: './login-signup.component.html',
    styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
    users: User[] = [];
    firstName: String = '';
    lastName: String = '';
    email: String = '';
    password: String = '';
    message: String = '';
    showMessage: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    signUp(userForm: NgForm) {
        if (this.validateSignup()) {
            this.users.push(new User(this.firstName, this.lastName, this.email, this.password));
            userForm.reset();
            this.message = 'Signup successful';
        } else {
          this.message = 'Invalid email or password!';
        }

        this.showMessage = true;
    }


    validateSignup() {
        return this.email.includes('@') && this.email.includes('.') && this.password.length >= 8;
    }

    login(userForm: NgForm) {
      this.message = this.validateLogin() ? 'Login successful!' : 'Invalid email or password!';
      this.showMessage = true;
    }

    validateLogin() {
      let result = false;

      this.users.forEach(value => {
        if (value.email === this.email && value.password === this.password) {
          result = true;
        }
      });

      return result;
    }
}
