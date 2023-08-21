import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../sysgen/app-services.service';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(public devService: AppServicesService) { }

  ngOnInit() { }

  myAddress: string = "267/8, YanAung 5 St, Yankin Township";
  myPhone: number = 9252660486;
  myEmail: string = "minnaingtun@mmeasenet.com"
  myFlag: boolean = false;
  userMessage: string = "";
  userName: string = "";
  userEmail: string = "";
  userSubject: string = "";


  clickFunction() {
    this.myFlag = !this.myFlag;
    this.devService.userInputDataSubmitted(this.userName, this.userEmail, this.userSubject, this.userMessage); // store data to service array.
    alert("Address : "+this.myAddress+"\nPhone : "+this.myPhone+"\nEmail : "+this.myEmail+"\nUser Message => "+this.userMessage);
  }

  resetFunction(){
    this.userMessage = "";
    this.myFlag = false;
  }

}
