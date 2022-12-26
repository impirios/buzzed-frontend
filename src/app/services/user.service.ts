import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseApiService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './auth.service';



const baseApiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApiService {
  currentUser: any = {};
  constructor(private http: HttpClient, private authService: AuthenticationService) {

    super();
    if (this.authService.isLoggedIn()) {
      this.currentUser = this.authService.getCredentials();
    }
  }



  getFollowers(id) {
    return this.http.get((baseApiUrl + 'relation/followers/?userId=' + id)).pipe(map((res: any) => res.data));

  }

  getFollowing(id) {
    return this.http.get((baseApiUrl + 'relation/following/?userId=' + id)).pipe(map((res: any) => res.data));

  }

  getStats(id) {
    return this.http.get((baseApiUrl + 'relation/following/?userId=' + id)).pipe(map((res: any) => res.data));

  }

  follow(payload) {
    return this.http.post(baseApiUrl + 'relation/follow', payload).pipe(map((res: any) => res.data));
  }

  unfollow(payload) {
    return this.http.post(baseApiUrl + 'relation/unfollow', payload).pipe(map((res: any) => res.data));
  }

  getUsers(text) {
    return this.http.get(baseApiUrl + 'user/search?text=' + text).pipe(map((res: any) => res.data));
  }

  getAllUsers() {
    return this.http.get(baseApiUrl + 'user/all').pipe(map((res: any) => res.data));
  }

  getUserByAlias(text) {
    return this.http.get(baseApiUrl + 'user/?alias=' + text).pipe(map((res: any) => res.data));
  }
  getStatsOfUser(id) {
    return this.http.get(baseApiUrl + 'relation/stats?userId=' + id).pipe(map((res: any) => res.data));
  }
}
