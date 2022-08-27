import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
@Component({
  selector: 'app-doc-appointment',
  templateUrl: './doc-appointment.component.html',
  styleUrls: ['./doc-appointment.component.css']
})
export class DocAppointmentComponent implements OnInit {

  monthName = new Date().getMonth() ;
  monthList: any ;


  valueChange($event) {
    console.log(this.monthName) ;
    this.router.navigate(['months',this.monthName, 'details']);
  }
  
  openModal() {
    this.modalService.open(CreateAppointmentComponent);
    
  }

  constructor(private router : Router , private modalService : NgbModal) { }

  ngOnInit() {
    this.monthList = [{title : 'January' ,value: 'january', num: 1} , {title:'February' , value: 'february',num: 2} , 
  {title : 'March' , value: 'march',num : 3  } ,{title : 'April' , value : 'april', num: 4 },
  {title: 'May' , value: 'may' , num: 5}, 
  {title :'June' , value : 'june' , num: 6}, {title :'July' , value: 'july', num: 7} ,
  {title: 'August' , value: 'august' , num: 8} ,
  {title: 'September' , value: 'september', num : 9 },
  {title: 'October' , value: 'october', num: 10} , {title :'November' , value : 'november', num: 11} ,
  { title : 'December' ,value: 'december',num : 12}] ;
  }
  

}
