import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  developerName: string = "min naing tun";
  developerEmail: string = "minnaingtun.pro@gmail.com";
  currentDate: Date = new Date();

}
