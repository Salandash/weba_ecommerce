import { Http , Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    userName: string;
    loggedIn: boolean;
    url = "http://localhost:3000/auth";

    constructor(private http: Http){
        this.userName = '';
        this.loggedIn = false;
    }

    login(userinfo){
        let url = '${this.url}/login';
        let iJson = JSON.stringify(userinfo);

        return this.http.post(url, iJson, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .map(res => res.text())
        .map(res => {
            if(res =="error" || res =="nofound"){
                this.loggedIn= false;
            } else{
                localStorage.setItem('token', res);
                this.userName = userinfo.userl
                this.loggedIn = true;
            }
            return this.loggedIn;
        });
    }

    logout(): void{
        localStorage.removeItem('token');
        this.userName = '';
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}