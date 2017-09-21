import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SerialNumberFormComponent } from './serial-number-form/serial-number-form.component';
import { FaqComponent } from './faq/faq.component';

const appRoutes: Routes = [
  { path: '', component: SerialNumberFormComponent},
  { path: 'about', component: AboutComponent },
  { path: 'faq',      component: FaqComponent },
//   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SerialNumberFormComponent,
    FooterComponent,
    AboutComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
