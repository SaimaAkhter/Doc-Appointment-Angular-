import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocAppointmentComponent } from './doc-appointment.component';

const routes: Routes = [
    {
        path: 'months',
        component: DocAppointmentComponent
    },
    {
      path: ':id',
      component: DocAppointmentComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DocAppointmentRoutingModule { }
