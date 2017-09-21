import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SerialNumberFormComponent } from './serial-number-form/serial-number-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SerialNumberFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
