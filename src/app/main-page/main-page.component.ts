import { Component, OnInit } from '@angular/core';
import { Item } from 'src/shared/models/item.model';
declare var require: any;
var logs = require('./log.json');
import { saveAs } from 'file-saver';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';
import {parse} from 'mathjs';

'use strict';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  items: Item [] = [];
  user: string;
  constructor(private _demoService: DemoService) { }
	ngOnInit() {
    this.getLogs();
	  Observable.interval(1000).subscribe((val) => { this.getLogs() });
    
  }
 
  getLogs() {
   this._demoService.getLogs().subscribe(
      data => { 
	  this.items = data;
	  },
      err => console.error(err),
     () => {}
    );
  }


	addItem(item: Item) {
		this.user = item.user;
		try{
			parse(item.calculation);
			let ev = eval(item.calculation);
			item.calculation+=" = "+ev;
			
		} catch(err){
			item.calculation+=" : Invalid mathematic expression";
		}

	this._demoService.addLogs(item);
	}
	
	deleteItem(item: Item){
		let ind = this.items.indexOf(item);
		this.items.splice(ind,1);
	}
	
}
