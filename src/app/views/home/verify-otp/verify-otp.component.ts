import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from '../../../../shared/localservice';

@Component({
  selector: 'app-verify-otp',
  standalone: false,
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.css'
})
export class VerifyOtpComponent {
   otpForm!: FormGroup;
  message = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private localService: LocalService,
    private router: Router
  ) {
    this.otpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }

  onSubmit() {
    if (this.otpForm.invalid) return;

    this.isLoading = true;
    this.localService.verifyOtp(this.otpForm.value.email, this.otpForm.value.otp).subscribe({
      next: (res: any) => {
        this.message = res.message;
        this.isLoading = false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.message = err.error?.message || 'Verification failed.';
        this.isLoading = false;
      }
    });
  }
}
