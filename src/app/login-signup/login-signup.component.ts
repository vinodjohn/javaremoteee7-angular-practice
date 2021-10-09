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
    loginEmail: String = '';
    loginPassword: String = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    signUp(userForm: NgForm) {
        if (this.validateSignup()) {
            this.users.push(new User(this.firstName, this.lastName, this.email, this.password));
            this.message = 'Signup successful!';
        } else {
            this.message = 'Signup unsuccessful! Invalid email or password!';
        }

        userForm.reset();
        this.showMessage = true;
    }


    validateSignup() {
        return this.email.includes('@') && this.email.includes('.') && this.password.length >= 8;
    }

    login(userForm: NgForm) {
        this.message = this.validateLogin() ? 'Login successful!' : 'Login unsuccessful! Invalid email or password!';
        this.showMessage = true;
        userForm.reset();
    }

    validateLogin() {
        let result = false;

        this.users.forEach(value => {
            if (value.email === this.loginEmail && value.password === this.loginPassword) {
                result = true;
            }
        });

        return result;
    }
}
