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
}
