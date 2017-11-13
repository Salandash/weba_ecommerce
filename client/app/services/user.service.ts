import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class userservice{
    constructor(private http:Http){
        console.log('user Service Initialized...');
    }
    
    getitems(){
        return this.http.get('/api/user')
            .map(res => res.json());
    }
    
    additem(newuser){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/user', JSON.stringify(newuser), {headers: headers})
            .map(res => res.json());
    }
    
    deleteitem(username){
        return this.http.delete('/api/user/'+username)
            .map(res => res.json());
    }
    
    updateStatus(user){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/user/'+user.username, JSON.stringify(user), {headers: headers})
            .map(res => res.json());
    }
}