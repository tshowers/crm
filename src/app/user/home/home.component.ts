import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { User } from 'src/app/shared/data/user.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: any;
  public isEditMode: boolean = false;

  public isDiagnostic: boolean = false;

  public isDisplayName: boolean = false;
  public isFirstName: boolean = false;
  public isMiddleName: boolean = false;
  public isLastName: boolean = false;
  public isEmail: boolean = false;
  public isStatus: boolean = false;
  public isSocialMedia: boolean = false;
  public isProfileType: boolean = false;
  public isProfession: boolean = false;
  public isPrefix: boolean = false;
  public isPhone: boolean = false;
  public isNote: boolean = false;
  public isGender: boolean = false;
  public isCompany: boolean = false;
  public isBirthday: boolean = false;
  public isAddress: boolean = false;

  constructor(private _location: Location, private _router: Router) { }

  ngOnInit(): void {
  }

  back(): void {
    this._location.back();
  }

  list(): void {
    this.isEditMode = false;
  }

  onDashboard(): void {
    this._router.navigate(['contacts', 'dashboard']);
  }

  onView(data: any) {
    this.isEditMode = true;

    this.data = data;

    this.scrollTop();
  }

  onNew(): void {
    this.isEditMode = true;

    this.data = <User>{
      displayName: ''
    };

  }

  private scrollTop(): void {
    // For Safari
    document.body.scrollTop = 0;

    // For Chrome, Firefox, IE aan Opera
    document.documentElement.scrollTop = 0;

  }

  onEdit(event: any): void {
    this.editReset();

    this.scrollTop();

    switch (event) {
      case 'firstName':
        this.onFirstName();
        break;
      case 'lastName':
        this.onLastName();
        break;
      case 'middleName':
        this.onMiddleName();
        break;
      case 'displayName':
        this.onDisplayName();
        break;
      case 'emailAddress':
        this.onEmailAddress();
        break;
      case 'status':
        this.onStatus();
        break;
      case 'socialMedia':
        this.onSocialMedia();
        break;
      case 'profileType':
        this.onProfileType();
        break;
      case 'prefix':
        this.onPrefix();
        break;
      case 'phone':
        this.onPhones();
        break;
      case 'profession':
        this.onProfession();
        break;
      case 'notes':
        this.onNotes();
        break;
      case 'gender':
        this.onGender();
        break;
      case 'company':
        this.onCompany();
        break;
      case 'birthday':
        this.onBirthday();
        break;
      case 'address':
        this.onAddress();
        break;
      case 'diagnostic':
        this.setDiagnostic();
        break;

      default:
        break;
    }

  }

  public editReset(): void {
    this.isDisplayName = false;
    this.isFirstName = false;
    this.isMiddleName = false;
    this.isLastName = false;
    this.isEmail = false;
    this.isStatus = false;
    this.isSocialMedia = false;
    this.isProfileType = false;
    this.isProfession = false;
    this.isPrefix = false;
    this.isPhone = false;
    this.isNote = false;
    this.isGender = false;
    this.isCompany = false;
    this.isBirthday = false;
    this.isAddress = false;


  }

  setDiagnostic(): void {
    this.isDiagnostic = !this.isDiagnostic;
  }

  onDisplayName(): void {
    this.isDisplayName = true;
  }

  onFirstName(): void {
    this.isFirstName = true;
  }

  onMiddleName(): void {
    this.isMiddleName = true;
  }

  onLastName(): void {
    this.isLastName = true;
  }

  onEmailAddress(): void {
    this.isEmail = true;
  }

  onStatus(): void {
    this.isStatus = true;
  }

  onSocialMedia(): void {
    this.isSocialMedia = true;
  }

  onProfileType(): void {
    this.isProfileType = true;
  }

  onProfession(): void {
    this.isProfession = true;
  }

  onPrefix(): void {
    this.isPrefix = true;
  }

  onPhones(): void {
    this.isPhone = true;
  }

  onNotes(): void {
    this.isNote = true;
  }

  onGender(): void {
    this.isGender = true;
  }

  onBirthday(): void {
    this.isBirthday = true;
  }

  onAddress(): void {
    this.isAddress = true;
  }

  onCompany(): void {
    this.isCompany = true;
  }
}
