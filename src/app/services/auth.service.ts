import { BaseApiService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface Credentials {
    email: string;
    _id: string;
    alias: string;
    token: string;
    thumbImg: string;
}
const credentialsKey = "credentials";
const baseApiUrl = environment.apiUrl;

@Injectable({
    providedIn:'root'
})

export class AuthenticationService extends BaseApiService {
    private _credentials: Credentials | null;
    constructor(public http: HttpClient) {
        super();
        const savedCredentials = localStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this._credentials = JSON.parse(savedCredentials);
        }

    }

    isLoggedIn() {
        if (!this._credentials) {
            return false;
        }
        return true;
    }


    signup(payload) {
        console.log(baseApiUrl + 'user/signup')
        return this.http.post((baseApiUrl + 'user/signup'), payload).pipe(map((res:any) => res.data));
    }

    login(payload) {
        return this.http.post((baseApiUrl + 'user/login'), payload).pipe(map((res:any) => res.data));
    }

    setCredentials(data: Credentials) {
        localStorage.setItem(credentialsKey, JSON.stringify(data));
        this._credentials = data;
    }

    getCredentials() {
        return this._credentials;
    }


    logout() {
        localStorage.removeItem(credentialsKey);
    }

    getAuthToken() {
        return this._credentials && this._credentials.token ? this._credentials.token : '';
    }

}