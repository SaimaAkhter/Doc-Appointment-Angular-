import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    age: new FormControl(),
    date: new FormControl(),
    time: new FormControl()
  })
 
 
  onSubmit() {
    console.log(this.contactForm.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
