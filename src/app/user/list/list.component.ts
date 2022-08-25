import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() id = new EventEmitter();
  public data: any;
  public filteredData = '';

  constructor(public contactService: ContactService) { 
    this.contactService.getAllOrphaned();
  }

  ngOnInit(): void {

  }


  public onView(value: any): void {
    this.id.emit(value);
  }

}
