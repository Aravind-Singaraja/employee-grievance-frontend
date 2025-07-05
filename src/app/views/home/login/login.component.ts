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

  constructor(private localService: LocalService, private auth: AuthService, private router: Router) {}

  login() {
    this.localService.login(this.email, this.password).subscribe((res: any) => {
      this.auth.storeToken(res.token);
      const role = this.auth.getUserRole();

      if (role === 'employee') {
        this.router.navigate(['/employee-dashboard']);
      } else if (role === 'hr') {
        this.router.navigate(['/hr-dashboard']);
      } else if (role === 'admin') {
        this.router.navigate(['/admin-dashboard']);
      }
    });
  }
}

