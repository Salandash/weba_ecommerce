import { Component } from '@angular/core';
import {itemservice} from './services/item.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[itemservice]
})

export class AppComponent { }
