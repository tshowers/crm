import { Component, OnInit } from '@angular/core';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { environment } from 'src/environments/environment';
import { EmailAddress } from 'src/app/shared/data/email-address.model';

export const EMAIL_TYPES = ['Personal', 'Office', 'Other', 'Corporate'];

@Component({
  selector: 'app-email-address',
  templateUrl: './email-address.component.html',
  styleUrls: ['./email-address.component.css']
})
export class EmailAddressComponent extends DataHandlerComponent implements OnInit {

  public emailAddress = <EmailAddress>{
    emailAddress: '',
    emailAddressType: ''
  };

  public emailTypes = EMAIL_TYPES;

  override onSubmit(): void {
    this.addEmailAddress();
  }

  addEmailAddress(): void {
    if (this.data.emails && this.data.emails.length)
      this.data.emails.push(this.emailAddress);
    else
      this.addEmailAddressAfterAddingArray();

    super.onSubmit(environment.CONTACTS);

    this.emailAddress = <EmailAddress>{
      emailAddress: '',
      emailAddressType: ''
    };
  }

  addEmailAddressAfterAddingArray(): void {
    this.data.emails = [];
    this.data.emails.push(this.emailAddress);

  }

  removeEmailAddress(at: number): void {
    this.data.emails.splice(at, 1);
  }

  editEmailAddress(at: number): void {
    this.emailAddress = this.data.emails[at];
    this.removeEmailAddress(at);
  }

}
