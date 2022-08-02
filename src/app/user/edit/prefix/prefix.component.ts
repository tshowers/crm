import { Component, OnInit } from '@angular/core';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { environment } from 'src/environments/environment';

export const PREFIXES = ['Adm', 'Atty', 'Brother', 'Capt', 'Chief', 'Cmdr', 'Col', 'Dean', 'Dr', 'Elder', 'Father',
  'Gen', 'Gov', 'Hon', 'Lt Col', 'Maj', 'MSgt', 'Mr', 'Mrs', 'Ms', 'Prince', 'Prof', 'Rabbi', 'Reverend', 'Sister'];

@Component({
  selector: 'app-prefix',
  templateUrl: './prefix.component.html',
  styleUrls: ['./prefix.component.css']
})
export class PrefixComponent extends DataHandlerComponent implements OnInit {

  public prefixes = PREFIXES;

  override onSubmit(): void {
    super.onSubmit(environment.CONTACTS);
  }

}
