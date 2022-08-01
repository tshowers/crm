import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { DisplayNameComponent } from './edit/display-name/display-name.component';
import { FirstNameComponent } from './edit/first-name/first-name.component';
import { LastNameComponent } from './edit/last-name/last-name.component';
import { MiddleNameComponent } from './edit/middle-name/middle-name.component';
import { ContactFilterPipe } from './contact-filter.pipe';
import { EmailAddressComponent } from './edit/email-address/email-address.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ListComponent,
    ViewComponent,
    DisplayNameComponent,
    FirstNameComponent,
    LastNameComponent,
    MiddleNameComponent,
    ContactFilterPipe,
    EmailAddressComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
