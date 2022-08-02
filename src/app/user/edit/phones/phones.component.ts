import { Component, OnInit } from '@angular/core';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { environment } from 'src/environments/environment';
import { Phone } from 'src/app/shared/data/phone.model';

export const PHONE_TYPES = ['Mobile', 'Personal', 'Office', 'Corporate', 'Other'];

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent extends DataHandlerComponent implements OnInit {

  public phoneTypes = PHONE_TYPES;

  public phone = <Phone>{
    countryCode: '',
    phoneNumber: '',
    phoneType: ''
  }

  override onSubmit(): void {
    this.addPhone();
  }

  addPhone(): void {
    if (this.data.phones && this.data.phones.length)
      this.data.phones.push(this.phone);
    else
      this.addPhoneAfterAddingArray();

    super.onSubmit(environment.CONTACTS);

    this.phone = <Phone>{
      countryCode: '',
      phoneNumber: '',
      phoneType: ''
    };
  }

  addPhoneAfterAddingArray(): void {
    this.data.phones = [];
    this.data.phones.push(this.phone);

  }

  removePhone(at: number): void {
    this.data.phones.splice(at, 1);
  }

  editPhone(at: number): void {
    this.phone = this.data.phones[at];
    this.removePhone(at);
  }

}
