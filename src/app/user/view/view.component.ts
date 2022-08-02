import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() data: any;
  @Input() isDiagnostic: boolean = false;
  @Output() editItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayName(): void {
    this.editItem.emit('displayName');
  }

  onFirstName(): void {
    this.editItem.emit('firstName');
  }

  onMiddleName(): void {
    this.editItem.emit('middleName');
  }

  onLastName(): void {
    this.editItem.emit('lastName');
  }

  onEmailAddress(): void {
    this.editItem.emit('emailAddress');
  }

  onStatus(): void {
    this.editItem.emit('status');
  }

  onSocialMedia(): void {
    this.editItem.emit('socialMedia');
  }

  onProfileType(): void {
    this.editItem.emit('profileType');
  }

  onProfession(): void {
    this.editItem.emit('profession');
  }

  onPrefix(): void {
    this.editItem.emit('prefix');
  }

  onPhone(): void {
    this.editItem.emit('phone');
  }

  onNotes(): void {
    this.editItem.emit('notes');
  }

  onGender(): void {
    this.editItem.emit('gender');
  }

  onCompany(): void {
    this.editItem.emit('company');
  }

  onBirthday(): void {
    this.editItem.emit('birthday');
  }

  onAddress(): void {
    this.editItem.emit('address');
  }

  setDiagnostic(): void {
    this.editItem.emit('diagnostic');
  }

}
