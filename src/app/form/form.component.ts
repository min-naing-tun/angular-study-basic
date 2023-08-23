import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      rFirstName : new FormControl('', Validators.compose(
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[\\a-z\\A-Z\\s\\_/]+'), //only accept a to z, A to Z, Space string, underscore
          Validators.maxLength(20)
        ]
      )),
      rLastName: new FormControl('', Validators.compose(
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.pattern('[\\a-z\\A-Z\\_\\s/]+')
        ]
      )),
      rEmail: new FormControl('', Validators.compose(
        [
          Validators.required,
          Validators.email
        ]
      )),
      rPassword: new FormControl('', Validators.compose(
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(16),
        ]
      )),
      rSkill: new FormControl('', Validators.required)
    })
  }

  submitData(userForm: string[]){
    console.log(userForm); 
  }

}
