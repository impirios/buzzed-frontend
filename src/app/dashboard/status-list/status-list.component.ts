import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})

export class StatusListComponent implements OnInit {
  statuses = []
  userId = '';
  hide = true;
  constructor(private feedService: FeedService, private router: Router, private authService: AuthenticationService, private route: ActivatedRoute) {
    // this.route.queryParams.subscribe(params => {
    //   console.log(params)
    //   this.userId = params['userId'];
    //   console.log(this.userId,"b")
    //   if(this.userId){
    //     this.getStatusById();
    //   }
    //   else{
    //     this.feedMaster();
    //   }
    // });

    this.feedMaster();
  }

  ngOnInit() {
  }

  feedMaster() {
    console.log(this.router.url);
    switch (this.router.url) {
      case '/latest':
      case '/explore':
        this.fetchAllFeed();
        break;
      case '/': {
        this.hide = false;
        if (this.authService.isLoggedIn()) {
          this.fetchFeed();
        }
        else {
          this.fetchAllFeed();
        }
        break;

      }
      default:
        this.userId = this.router.url.split('/')[1];
        console.log("this runs", this.userId)

        this.getStatusById();
    }

  }

  fetchFeed() {
    this.feedService.getFeed().subscribe(data => {
      data.map(d => {
        this.statuses.push(...d.posts);
      })
    })
  }

  fetchAllFeed() {
    this.feedService.getAllFeed().subscribe(data => {
      console.log(data, "bruhh")
      this.statuses = data;
    })
  }

  getStatusById() {
    this.feedService.getFeedById(this.userId).subscribe(data => {
      console.log(data, "bruhh")
      this.statuses = data;
    })
  }

}
