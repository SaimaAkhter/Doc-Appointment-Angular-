import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  appointmentForm = new FormGroup({
    firstname: new FormControl('',[Validators.required,
      Validators.maxLength(40)]),
    lastname: new FormControl('',[Validators.required, Validators.maxLength(40)]),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    gender: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
    time: new FormControl('' ,[Validators.required])
  }) ;
 
 
  onSubmit() {
    console.log(this.appointmentForm.value);
    localStorage.setItem('appointmentForm',this.appointmentForm.value) ;
  }

  cancel() {
    this.modalService.dismissAll() ;
  }
  constructor(private modalService: NgbModal) { }
  ngOnInit() {
  }

}
