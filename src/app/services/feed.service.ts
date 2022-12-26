import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseApiService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const baseApiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class FeedService extends BaseApiService {

  constructor(private http: HttpClient) {
    super();
  }

  getFeed(){
    return this.http.get(baseApiUrl+'feed/').pipe(map((res:any) => res.data));
  }

  getAllFeed(){
    return this.http.get(baseApiUrl+'post/getAllPosts').pipe(map((res:any) => res.data));
  }

  getFeedById(userId){
    return this.http.get(baseApiUrl+'post/searchById?userId='+userId).pipe(map((res:any) => res.data));
  }


}
