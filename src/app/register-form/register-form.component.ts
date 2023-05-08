import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: [''],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    gender: [''],
    age: [0, [this.validateAge]],
    email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
    phone: ['', [Validators.pattern(/^[789]\d{9,9}$/)]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zipCode: ['', [Validators.pattern(/\d{5,6}/)]]
    })
  }, { validators: [this.mustMatchValidator] });

  constructor(private userService: UserService, private fb: FormBuilder, private _snackBar: MatSnackBar) { }

  get zipCode() { return this.registerForm.get("address")?.get("zipCode"); }

  get form() { return this.registerForm.controls; }

  ngOnInit(): void {
    console.log("here");
  }

  onSubmit(): void {
    let user = this.registerForm.value;
    this.userService.addUser(user).subscribe({
      next: data => {
        this._snackBar.open('Congrats!!You have submiited the form!!', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        })
        //this.registerForm.reset();
      },
      error: e => {
        this._snackBar.open('Failed to register user !! Please Try Again Later', 'Failure', {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-warn']
        });
      }
    });
  }

  validateAge(c: AbstractControl) {
    const ageValue = c.value;
    if (ageValue != null && ageValue < 18) {
      return { invalidAge: true }
    }
    return null;
  }

  mustMatchValidator(fg: AbstractControl) {
    const passwordValue = fg.get("password")?.value;
    const confirmPasswordValue = fg.get("confirmPassword")?.value;
    if (!passwordValue || !confirmPasswordValue) {
      return null;
    }
    if (passwordValue != confirmPasswordValue) {
      return { passwordMismatch: true }
    }
    return null;
  }
}

