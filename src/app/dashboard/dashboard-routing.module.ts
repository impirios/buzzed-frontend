import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusListComponent } from './status-list/status-list.component';


const routes: Routes = [
  {
    path:"",
    component:StatusListComponent
  },
  {
    path:"explore",
    component:StatusListComponent
  },
  {
    path:"trending",
    component:StatusListComponent
  },
  {
    path:"latest",
    component:StatusListComponent
  },
  {
    path:":userId",
    component:StatusListComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
