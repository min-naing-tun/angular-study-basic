import { Component } from '@angular/core';
import { AppServicesService } from '../sysgen/app-services.service';

@Component({
  selector: 'app-user-form-show',
  templateUrl: './user-form-show.component.html',
  styleUrls: ['./user-form-show.component.css']
})
export class UserFormShowComponent {
  
  constructor(public devService: AppServicesService) {
  }

  developerAge = 23; //data for ng Switch and ng If [ Structure Directive ]
  fruits: string[] = ['apple', 'mango', 'orange', 'lemon', 'peach']; //data for ng For [ Structure Directive ]
}
