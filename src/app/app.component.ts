import { Component, OnInit } from '@angular/core';
import { AppServicesService } from './sysgen/app-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public devService: AppServicesService) {
    
  }

  title = 'mnt-basic-angular-study';



}
