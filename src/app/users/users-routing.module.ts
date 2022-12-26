import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {
    path:":alias",
    component:UserProfileComponent
  },
  // {
  //   path:"followers",
  //   component:UserListComponent
  // },
  // {
  //   path:"following",
  //   component:UserListComponent
  // },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
