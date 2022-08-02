import { Component, OnInit } from '@angular/core';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { environment } from 'src/environments/environment';
import { Address } from 'src/app/shared/data/address.model';

export const ADDRESS_TYPES = ['Home', 'Office', 'Corporate', 'Other'];

export const COUNTRIES = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Angola', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bangladesh', 'Barbados', 'Belgium', 'Belize', 'Bermuda', 'Bolivia', 'Botswana', 'Brazil', 'Bulgaria', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Chile', 'China', 'Colombia', 'Congo', 'Costa Rica', 'Cote d Ivoire', 'Cuba', 'Czech Republic', 'Denmark', 'Dominical Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Ethiopia', 'Falkland Islands', 'Fiji', 'Finland', 'France', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Guadeloupe', 'Guatemala', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kenya', 'Korea Republic of', 'Lebanon', 'Lithuania', 'Madagascar', 'Malaysia', 'Mali', 'Mexico', 'Morocco', 'Mozambique', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Nigeria', 'Norway', 'Pakistan', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Russia', 'Samoa', 'Senegal', 'Sierra Leone', 'Singapore', 'Slovakia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Tajikistan', 'Tanzania', 'Thailand', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Ukraine', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Viet Nam', 'Virgin Islands British', 'Virgin Islands U.S.', 'Yugoslavia', 'Zaire', 'Zimbabwe'];

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent extends DataHandlerComponent implements OnInit {

  public addressTypes = ADDRESS_TYPES;

  public address = <Address>{
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    province: '',
    zipCode: '',
    country: '',
    county: '',
    addressType: ''
  };

  override onSubmit(): void {
    this.addAddress();
  }

  addAddress(): void {
    if (this.data.addresses && this.data.addresses.length)
      this.data.addresses.push(this.address);
    else
      this.addAddressAfterAddingArray();

    super.onSubmit(environment.CONTACTS);

    this.address = <Address>{
      streetAddress1: '',
      streetAddress2: '',
      city: '',
      province: '',
      zipCode: '',
      country: '',
      county: '',
      addressType: ''
    };
  }

  addAddressAfterAddingArray(): void {
    this.data.addresses = [];
    this.data.addresses.push(this.address);

  }

  removeAddress(at: number): void {
    this.data.addresses.splice(at, 1);
  }

  editAddress(at: number): void {
    this.address = this.data.addresses[at];
    this.removeAddress(at);
  }

}
