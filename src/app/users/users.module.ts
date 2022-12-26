import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [ UserProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UsersModule { }
