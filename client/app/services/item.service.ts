import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class itemservice{
    constructor(private http:Http){
        console.log('item Service Initialized...');
    }
    
    getitems(){
        return this.http.get('/api/items')
            .map(res => res.json());
    }
    
    additem(newitem){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/item', JSON.stringify(newitem), {headers: headers})
            .map(res => res.json());
    }
    
    deleteitem(id){
        return this.http.delete('/api/item/'+id)
            .map(res => res.json());
    }
    
    updateStatus(item){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/item/'+item._id, JSON.stringify(item), {headers: headers})
            .map(res => res.json());
    }
}