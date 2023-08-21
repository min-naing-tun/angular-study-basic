import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  

  userInputDataSubmitted(name:string, email:string, subject:string, message:string){ //use for user contact form' data storing process
    this.userInputData.length = 0;
    this.userInputData.push(name);
    this.userInputData.push(email);
    this.userInputData.push(subject);
    this.userInputData.push(message);
  }

  constructor(private http:HttpClient) { }

  getDeveloperEmail(){
    return "minnaingtun@mmeasenet.com"
  }

  developerName: string = "Min Naing Tun";

  public userInputData: string[] = ["", "", "", ""];

  getUsers() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }


}
