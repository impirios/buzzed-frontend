import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseApiService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



const baseApiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class StatusService extends BaseApiService {

  constructor(public http: HttpClient) {
    super();
  }
  createStatus(payload) {
    console.log(baseApiUrl + 'post/')
    return this.http.post((baseApiUrl + 'post/'), payload).pipe(map((res:any) => res));
  }

  updateStatus(payload) {
    console.log(baseApiUrl + 'post/')
    return this.http.put((baseApiUrl + 'post/'), payload).pipe(map((res:any) => res));
  }

  deleteStatus(id) {
    console.log(baseApiUrl + 'post/')
    return this.http.delete((baseApiUrl + 'post/?id='+id)).pipe(map((res:any) => res));
  }

  searchById(id) {
    return this.http.get((baseApiUrl + 'post/searchById?userId='+id)).pipe(map((res:any) => res));
  }
  
}
