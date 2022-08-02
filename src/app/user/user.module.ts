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
import { AddressComponent } from './edit/address/address.component';
import { ProfileTypeComponent } from './edit/profile-type/profile-type.component';
import { ProfessionComponent } from './edit/profession/profession.component';
import { StatusComponent } from './edit/status/status.component';
import { BirthdayComponent } from './edit/birthday/birthday.component';
import { GenderComponent } from './edit/gender/gender.component';
import { PrefixComponent } from './edit/prefix/prefix.component';
import { SocialMediaComponent } from './edit/social-media/social-media.component';
import { PhonesComponent } from './edit/phones/phones.component';
import { NotesComponent } from './edit/notes/notes.component';
import { CompanyComponent } from './edit/company/company.component';
import { AttachmentsComponent } from './edit/attachments/attachments.component';



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
    EmailAddressComponent,
    AddressComponent,
    ProfileTypeComponent,
    ProfessionComponent,
    StatusComponent,
    BirthdayComponent,
    GenderComponent,
    PrefixComponent,
    SocialMediaComponent,
    PhonesComponent,
    NotesComponent,
    CompanyComponent,
    AttachmentsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
