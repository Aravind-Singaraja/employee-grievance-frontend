import { Component } from '@angular/core';
import { AuthService } from '../../../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(
    public auth: AuthService,
    private router: Router
  ) {}

  logout() {
    this.auth.clearToken();
    this.router.navigate(['/login']);
  }
}
