import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPopupComponent } from './login-popup/login-popup.component';


const routes: Routes = [
  {
    path:"",
    component:LoginPopupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
