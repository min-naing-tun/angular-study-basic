import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AppRouting } from './sysgen/AppRouting';
import { AppServicesService } from './sysgen/app-services.service';
import { UserFormShowComponent } from './user-form-show/user-form-show.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    ContactComponent,
    AboutComponent,
    UserFormShowComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [AppServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
