import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'ngconf-typeahead',
  templateUrl: './ngconf-typeahead.component.html',
  styleUrls: ['./ngconf-typeahead.component.css']
})
export class NgconfTypeaheadComponent implements OnChanges {
  //To filter the typeahead data with user input 
  @Input() term: String;

  //To set typeahead data to filter
  @Input() typeaheads: Array<any>;

  //To Force Stop Type Ahead
  @Input() stop: boolean;

  @Input() initialOptions: boolean = false;

  //To Emit when user Interact with the typeahead list
  @Output() onSelect = new EventEmitter<any>();

  prop: any = "";
  flag: boolean = true;
  forceStop: boolean = false;
  selectedItem: any = "";

  constructor() { }



  onSelectItem(item) {
    this.selectedItem = item;
    this.onSelect.emit(item);
    this.flag = false;
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.term) {
      if (changes.term.currentValue != this.selectedItem) {
        this.flag = true;
      }
    }

    if (changes.stop) {
      this.forceStop = changes.stop.currentValue;
    }

  }
}
