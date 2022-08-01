import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() data: any;
  @Input() isDiagnostic: boolean = false;
  @Output() editItem=  new EventEmitter();

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

  setDiagnostic(): void {
    this.editItem.emit('diagnostic');
  }

}
