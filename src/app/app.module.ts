import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AppRouting } from './sysgen/AppRouting';
import { AppServicesService } from './sysgen/app-services.service';
import { UserFormShowComponent } from './user-form-show/user-form-show.component';
import {HttpClientModule} from '@angular/common/http'

import {SumArrayPipe} from './about/SumArrayPipe'
import {SortArrayPipe} from './about/SortArrayPipe'
import {SortStringArrayPipe} from './about/SortStringArrayPipe';
import { BtnHoverDirective } from './btn-hover.directive';
import { BtnTextBoldDirective } from './btn-text-bold.directive';
import { BtnCustomMarginWhenHoverDirective } from './btn-custom-margin.directive'

import { ComA } from './user-form-show/comA.component';
import { ComB } from './user-form-show/comB.component';
import { ComC } from './user-form-show/comC.component';
import { ComD } from './user-form-show/comD.component';
import { ComHome } from './user-form-show/comHome.component';
import { ComRoute } from './user-form-show/comRoute.component';

@NgModule({
  declarations: [
    ComA,
    ComB,
    ComC,
    ComD,
    ComHome,
    SortStringArrayPipe,
    SortArrayPipe,
    SumArrayPipe,
    AppComponent,
    HomeComponent,
    FormComponent,
    ContactComponent,
    AboutComponent,
    UserFormShowComponent,
    BtnHoverDirective,
    BtnTextBoldDirective,
    BtnCustomMarginWhenHoverDirective    
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ComRoute,
    AppRouting
  ],
  providers: [AppServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
