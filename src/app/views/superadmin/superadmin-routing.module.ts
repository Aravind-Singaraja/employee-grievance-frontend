import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RoleGuard } from '../../../shared/role.guard';

const routes: Routes = [
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
