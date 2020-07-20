import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Item } from 'src/shared/models/item.model'
@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

	
@Input() item: Item;
@Input() user: string;
@Output() xButtonClick :EventEmitter<any> = new EventEmitter<any> ();

  constructor() { }

  ngOnInit(): void {
  }

  OnXButtonClick(){
	this.xButtonClick.emit();
  }
}
