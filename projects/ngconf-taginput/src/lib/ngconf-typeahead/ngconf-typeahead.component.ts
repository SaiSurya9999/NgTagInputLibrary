import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'ngconf-typeahead',
  templateUrl: './ngconf-typeahead.component.html',
  styleUrls: ['./ngconf-typeahead.component.css']
})
export class NgconfTypeaheadComponent implements OnInit,OnChanges {
  //To filter the typeahead data with user input 
  @Input() term: String;

  //To set typeahead data to filter
  @Input() typeaheads: Array<any>;

  //To Force Stop Type Ahead
  @Input() stop:boolean;

  //To Emit when user Interact with the typeahead list
  @Output()
  onSelect = new EventEmitter<any>();

  prop:any = "";
  flag:boolean = true;
  forceStop:boolean = false;
  selectedItem:any = "";

  constructor() { }

  ngOnInit(): void {
    console.log(this.term);
  }

 onSelectItem(item){
     this.selectedItem = item;
     this.onSelect.emit(item);
     this.flag = false;
 }

 ngOnChanges(changes: SimpleChanges){
   console.log(changes);
   if(changes.term){
    if(changes.term.currentValue != this.selectedItem){
       this.flag = true;
     }
   }
   
   if(changes.stop){
    this.forceStop = changes.stop.currentValue;
   }
  
 }
}