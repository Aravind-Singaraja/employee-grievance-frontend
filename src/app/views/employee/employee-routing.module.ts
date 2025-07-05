import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { RoleGuard } from '../../../shared/role.guard';

const routes: Routes = [
 { path: 'employee-dashboard', component: EmployeeDashboardComponent, canActivate: [RoleGuard], data: { roles: ['employee'] } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
