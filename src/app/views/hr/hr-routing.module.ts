import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../../../shared/role.guard';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';

const routes: Routes = [
    { path: 'hr-dashboard', component: HrDashboardComponent, canActivate: [RoleGuard], data: { roles: ['hr'] } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
