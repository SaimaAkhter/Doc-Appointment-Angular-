import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocAppointmentComponent } from './doc-appointment.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CalenderComponent } from './calender/calender.component';
import { CommonModule } from '@angular/common';
import { DocAppointmentRoutingModule } from './doc-appointment-routing.module';
// import { DocAppointmentComponent } from './doc-appointment/doc-appointment.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';

@NgModule({
  declarations: [
    DocAppointmentComponent,
    CalenderComponent,
    CreateAppointmentComponent,
  ],
  exports: [DocAppointmentComponent],
  entryComponents: [CreateAppointmentComponent] ,
  imports: [
    NgbModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    DocAppointmentRoutingModule,
    MatGridListModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [DocAppointmentComponent]
})
export class DocAppointmentModule { }
