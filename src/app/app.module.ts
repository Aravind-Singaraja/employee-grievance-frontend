import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { HomePageComponent } from './views/home/home-page/home-page.component';
// import { EmployeeDashboardComponent } from './views/employee/employee-dashboard/employee-dashboard.component';
// import { HrDashboardComponent } from './views/hr/hr-dashboard/hr-dashboard.component';
// import { AdminDashboardComponent } from './views/superadmin/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    // HrDashboardComponent,
    // AdminDashboardComponent,
    // HomePageComponent,
    // EmployeeDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
