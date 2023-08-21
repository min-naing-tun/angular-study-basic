import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../sysgen/app-services.service';

export interface userInfo{
  name : string | undefined;
  id?:string | number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  dataAry: userInfo[] = [];
  data: any[] = []
  constructor(private devService: AppServicesService) {
    
    
  }
  ngOnInit(): void {

    this.getUser();
   
  }

  getUser(){
    this.devService.getUsers().subscribe(res=>{
      //console.log("response", res);
      this.data = res;

    this.data.map(
       (o)=> {
        this.dataAry.push({
          name: o.name,
          id: o.id
        })
    })

    console.log(this.dataAry);
      
    });
  }



}
