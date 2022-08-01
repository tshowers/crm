import { Component, OnInit } from '@angular/core';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-last-name',
  templateUrl: './last-name.component.html',
  styleUrls: ['./last-name.component.css']
})
export class LastNameComponent  extends DataHandlerComponent implements OnInit {

  override onSubmit(): void {
    super.onSubmit(environment.CONTACTS);
  }

}
