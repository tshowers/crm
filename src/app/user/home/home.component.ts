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
}
