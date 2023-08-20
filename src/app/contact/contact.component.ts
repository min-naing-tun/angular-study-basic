import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  myAddress: string = "267/8, YanAung 5 St, Yankin Township";
  myPhone: number = 9252660486;
  myEmail: string = "minnaingtun@mmeasenet.com"
  myFlag: boolean = false;
  userMessage: string = ""


  clickFunction() {
    this.myFlag = !this.myFlag;
    alert("Address : "+this.myAddress+"\nPhone : "+this.myPhone+"\nEmail : "+this.myEmail+"\nUser Message => "+this.userMessage);
  }

  resetFunction(){
    this.userMessage = "";
    this.myFlag = false;
  }

}
