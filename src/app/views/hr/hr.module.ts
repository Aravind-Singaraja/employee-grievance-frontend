import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';


@NgModule({
  declarations: [
    HrDashboardComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule
  ]
})
export class HrModule { }
