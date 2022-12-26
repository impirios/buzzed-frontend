import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userDetails: any = {
  }
  currentUser = {};
  alias = "";
  stats: any = {};
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {

    this.route.paramMap.subscribe(
      params => {
        this.alias = params.get('alias');
        this.getUser();
      }
    )





  }
  getUser() {
    this.userService.getUserByAlias(this.alias).subscribe(user => {
      this.userDetails = user;
      this.getStats();
    })

  }

  getStats() {
    this.userService.getStatsOfUser(this.userDetails._id).subscribe(data => {
      this.stats = data;
    })
  }

  ngOnInit() {
  }


}
