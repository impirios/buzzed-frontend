import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: 'signup',
    loadChildren: './login/login.module#LoginModule',
  },

  {
    path: 'user',
    loadChildren: './users/users.module#UsersModule',
  },
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
