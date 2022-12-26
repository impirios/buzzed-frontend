import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnChanges {
  @Input() userData: any = {};
  followed = false;
  currentUser: any = {};
  constructor(private userService: UserService) {
    console.log(this.userData);
    this.currentUser = this.userService.currentUser;
    if (this.userData) {
      this.followedBy()
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
  }


  followedBy() {
    if ((this.userData.relation || []).find(r => r.from == this.currentUser._id)) {
      return true;
    }
    return false;
  }

  follow(id) {

    this.userService.follow({ userId: id }).subscribe(data => {
      console.log(data);
      this.userData.relation.push({ from: this.currentUser._id })
    })
  }

  unfollow(id) {
    this.userService.unfollow({ userId: id }).subscribe(data => {
      console.log(data);
      this.userData.relation = this.userData.relation.filter(r => r.from != this.currentUser._id);
    })
  }

}
