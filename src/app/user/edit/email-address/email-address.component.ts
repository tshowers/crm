import { Component, OnInit } from '@angular/core';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-email-address',
  templateUrl: './email-address.component.html',
  styleUrls: ['./email-address.component.css']
})
export class EmailAddressComponent extends DataHandlerComponent implements OnInit {

  public emailAddress = '';

  override onSubmit(): void {
    this.addEmailAddress();
  }

  addEmailAddress(): void {
    if (this.data.emails && this.data.emails.length)
      this.data.emails.push({'emailAddress': this.emailAddress});
    else this.addEmailAddressAfterAddingArray();

    this.emailAddress = '';
  }

  addEmailAddressAfterAddingArray(): void {
    this.data.emails = [];
    this.data.emails.push({'emailAddress': this.emailAddress});

  }

  removeEmailAddress(at: number): void {
    this.data.emails.splice(at, 1);
  }

  editEmailAddress(at: number): void {
    this.emailAddress = this.data.emails[at].emailAddress;
    this.removeEmailAddress(at);
  }

}
