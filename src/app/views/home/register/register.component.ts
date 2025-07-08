import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalService } from '../../../../shared/localservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  signupData!: FormGroup;
  roles = ['employee', 'hr', 'admin'];
  message = '';
  isLoading = false;

  constructor(private fb: FormBuilder, private localservice: LocalService, private router: Router ){
    this.signupData = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['employee']
    })
  }
  onsubmit(){
    if (this.signupData.invalid){
      this.message = 'Please fill all the fields correctly.';
      return;
    }
    this.isLoading = true;
    this.localservice.signup(this.signupData.value).subscribe({
      next: (res)=>{
        this.isLoading = false;
        this.message = 'Signup successful! OTP sent to your email.';
        this.router.navigate(['/verify-otp'], {
          queryParams: { email: this.signupData.value.email } // Pass email to OTP screen
        });
      },
      error: (err)=>{
        this.isLoading = false;
        this.message = err.error?.message || 'Signup failed.';
        console.error('Signup error:', err);
      }
    })
  }
  
}

