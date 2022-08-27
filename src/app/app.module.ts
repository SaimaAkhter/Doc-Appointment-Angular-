import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CalenderComponent } from './doc-appointment/calender/calender.component';
import { DocAppointmentComponent } from './doc-appointment/doc-appointment.component';
import { DocAppointmentModule } from './doc-appointment/doc-appointment.module';
import { CommonModule } from '@angular/common';
import { CreateAppointmentComponent } from './doc-appointment/create-appointment/create-appointment.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatGridListModule,
    CommonModule,
    FormsModule,
    DocAppointmentModule
  ],
  entryComponents: [CreateAppointmentComponent] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
