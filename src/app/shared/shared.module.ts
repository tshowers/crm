import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DataHandlerComponent } from './components/data-handler/data-handler.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    DataHandlerComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule

  ],
  exports: [
    FormsModule,
    HttpClientModule,
    RouterModule,
    FooterComponent,
    MenuComponent
  ]
})
export class SharedModule { }
