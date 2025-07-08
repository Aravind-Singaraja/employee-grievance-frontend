import { Component } from '@angular/core';
import { LocalService } from '../../../../shared/localservice';
import { AuthService } from '../../../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';
  isLoading = false;

  constructor(
    private localService: LocalService,
    private auth: AuthService,
    private router: Router
  ) {}
login() {
  if (!this.email || !this.password) {
    this.message = 'Email and password are required.';
    return;
  }

  this.isLoading = true;

  this.localService.login(this.email, this.password).subscribe({
    next: (res: any) => {
      const token = res.token;
      if (!token) {
        this.message = 'Token missing in response.';
        this.isLoading = false;
        return;
      }

      this.auth.storeToken(token); // ✅ store the token properly
      const role = this.auth.getUserRole(); // ✅ decoded from token

      if (role === 'employee') {
        this.router.navigate(['/employee']);
      } else if (role === 'hr') {
        this.router.navigate(['/hr']);
      } else if (role === 'admin') {
        this.router.navigate(['/superadmin/admin-dashboard']);
      } else {
        this.message = 'Unauthorized role';
      }

      this.isLoading = false;
    },
    error: (err) => {
      this.message = err.error?.message || 'Login failed';
      this.isLoading = false;
    }
  });
}

}

