import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./views/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'superadmin',
    loadChildren: () => import('./views/superadmin/superadmin.module').then(m => m.SuperadminModule)
  },
  {
    path: 'hr',
    loadChildren: () => import('./views/hr/hr.module').then(m => m.HrModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
