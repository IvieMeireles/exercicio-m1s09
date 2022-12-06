import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import NovoFormComponent from './novo-form/novo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    NavbarComponent,
    CardComponent,
    NovoFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
