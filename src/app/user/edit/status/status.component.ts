import { Component, OnInit } from '@angular/core';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { environment } from 'src/environments/environment';

export const STATUS = ['Open', 'Not-Started', 'Canceled', 'Expired', 'Pending', 'Closed', 'Current', 'Active', 'In-Active', 'On-Hold', 'Planning', 'Complete', 'Requested', 'Approved', 'Rejected', 'Idea', 'In-Progress'];

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent extends DataHandlerComponent implements OnInit {

  public status = STATUS;

  override onSubmit(): void {
    super.onSubmit(environment.CONTACTS);
  }

}
