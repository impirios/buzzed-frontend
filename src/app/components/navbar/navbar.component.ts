import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[AuthenticationService]
})
export class NavbarComponent implements OnInit {
  routes = [
    {
      displayName:"Home",
      routeTo:'/'
    },
    {
      displayName:"Explore",
      routeTo:'/explore'

    },
    // {
    //   displayName:"Trending",
    //   routeTo:'/trending'

    // },
    {
      displayName:"Latest",
      routeTo:'/latest'

    }
  ]
  user = {};
  selectedIndex = 0;
  isLoggedIn= false;

  constructor(private authService: AuthenticationService,private router:Router) {
    if(this.authService.isLoggedIn()){
      this.isLoggedIn = true;
      this.user = this.authService.getCredentials();
      console.log(this.user)

    }
  }

  setIndex(index){
    this.selectedIndex = index;
  }

  ngOnInit() {
  }
  logout(){
    this.authService.logout();
    window.location.reload()
  }

}
