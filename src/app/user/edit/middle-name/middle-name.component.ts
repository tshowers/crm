import { Component, OnInit } from '@angular/core';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-middle-name',
  templateUrl: './middle-name.component.html',
  styleUrls: ['./middle-name.component.css']
})
export class MiddleNameComponent extends DataHandlerComponent implements OnInit {

  override onSubmit(): void {
    super.onSubmit(environment.CONTACTS);
  }

}
