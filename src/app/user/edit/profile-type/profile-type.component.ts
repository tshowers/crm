import { Component, OnInit } from '@angular/core';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-type',
  templateUrl: './profile-type.component.html',
  styleUrls: ['./profile-type.component.css']
})
export class ProfileTypeComponent extends DataHandlerComponent implements OnInit {

  override onSubmit(): void {
    super.onSubmit(environment.CONTACTS);
  }

}
