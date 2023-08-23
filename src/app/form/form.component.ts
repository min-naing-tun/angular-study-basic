import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  skillData: string[] = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Jquery', 'Angular', 'NodeJs'];
  myForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.myForm = new FormGroup({
      rFirstName : new FormControl(),
      rLastName: new FormControl(),
      rEmail: new FormControl(),
      rPassword: new FormControl(),
      rSkill: new FormControl()
    })
  }

  submitData(userForm: string[]){
    console.log(userForm);
  }

}
