import { Component } from '@angular/core';
import {itemservice} from '../../services/item.service';
import {item} from '../../../item';

@Component({
  moduleId: module.id,
  selector: 'items',
  templateUrl: 'items.component.html'
})

export class itemsComponent { 
    items: item[];
    title: string;
    
    constructor(private itemservice:itemservice){
        this.itemservice.getitems()
            .subscribe(items => {
                this.items = items;
            });
    }
    
    additem(event){
        event.preventDefault();
        var newitem = {
            title: this.title,
            isDone: false
        }
        
        this.itemservice.additem(newitem)
            .subscribe(item => {
                this.items.push(item);
                this.title = '';
            });
    }
    
    deleteitem(id){
        var items = this.items;
        
        this.itemservice.deleteitem(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < items.length;i++){
                    if(items[i]._id == id){
                        items.splice(i, 1);
                    }
                }
            }
        });
    }
    
    updateStatus(item){
        var _item = {
            _id:item._id,
            title: item.title,
            isDone: !item.isDone
        };
        
        this.itemservice.updateStatus(_item).subscribe(data => {
            item.isDone = !item.isDone;
        });
    }
}
