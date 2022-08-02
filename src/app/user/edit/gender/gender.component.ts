import { Component, OnInit } from '@angular/core';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { environment } from 'src/environments/environment';

export const GENDERS = ['Male', 'Female', 'Transgender', 'Polygender', 'Nonbinary', 'Intergender', 'Gender Queer', 'Gender Neutral',
  'Genderfluid', 'Femme', 'Demigender', 'Cigender', 'Butch', 'Bigender', 'Aporagender', 'Agender'];

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent extends DataHandlerComponent implements OnInit {

  public genders = GENDERS;

  override onSubmit(): void {
    super.onSubmit(environment.CONTACTS);
  }

}
