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
    Name: string;
    Quantity: number;
    
    constructor(private itemservice:itemservice){
        this.itemservice.getitems()
            .subscribe(items => {
                this.items = items;
            });
    }
    
    additem(event){
        event.preventDefault();
        var newitem = {
            Name: this.Name,
            Quantity: this.Quantity
        }
        
        this.itemservice.additem(newitem)
            .subscribe(item => {
                this.items.push(item);
                this.Name = '';
                this.Quantity= 0;
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
}
