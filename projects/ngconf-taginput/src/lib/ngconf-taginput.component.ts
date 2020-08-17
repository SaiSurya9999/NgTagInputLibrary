import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
export interface styleCustom{
  iconColor: String,
  iconSize: String,
  tagBackground: String,
  tagFont: String,
  tagSize: String,
  tagBox_Background: String,
  tagBox_minHeight: String,
  tagBox_fontColor: String,
  tagBox_Height: String,
  tagBox_Width:String,
  tag_InputColor: String,
  tag_InputPlaceholder: String
}
@Component({
  selector: 'ngconf-taginput',
  template: `
  <div  class="tag-container" (click)="tag.focus()" [ngStyle]="tagBoxStyles">
   <span class="tag" [ngStyle]="tagStyles" title="Delete" 
   *ngFor="let item of tags; let i = index"
   >{{item}} 
   <svg (click)="directDelete(i)"  
     [ngStyle]="svgStyles" class="icon"
    viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
</span>
   
   <input (keyup.enter)="onEnter()" id="test" [ngStyle]="inputStyle" [placeholder]="inputStyle['placeholder']"
   (keyup.Backspace)="onDelete()" [(ngModel)]="term" #tag  class="tagInput" type="text">
   <ngconf-typeahead
   (onSelect)="onSelect($event)" 
   [typeaheads] = "typeaheads" 
   [term]="term"
   [stop]="stop"
   ></ngconf-typeahead>
   </div>

  `,
  styles: [
    `.tag-container{
      border: 2px solid #ccc;
      border-radius: 3px;
      background: #fff;
      min-height: 100px;
      height: auto;
      padding: 10px;
      width: 300px;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2), inset 0 1px 1px #fff;
      cursor: text;
  }
  .tagInput{
      border: none;
      
  }
  
  .tagInput:focus{
      border: none;
      outline: none;
  }
  
  .tag{
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 3px;
      background: #eee;
      color: black;
       padding: 3px;
       margin-top: 3px;
       margin-bottom: 3px;
       border-radius: 3px;
       margin-left: 5px;
       box-shadow: 0 0 4px rgba(0, 0, 0, 0.2), inset 0 1px 1px #fff;
       
     }
     .tag3::after{
      content: url('../../assets/close.svg');
      display: inline-block;
      margin-left: 3px;
  }
  .icon{
    
      display: inline-block;
      margin-left: 3px;
      cursor: pointer;
  }
  span{
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
  }`
  ]
})
export class NgconfTaginputComponent implements OnInit {

  @ViewChild('tag', { static: true }) tagInput: ElementRef;
  

  //To Force Stop Type Ahead
  @Input() customStyles:styleCustom;

  //To set typeahead data to filter
  @Input() typeaheads: Array<any>;

  //To set allowed tags data to filter
  @Input() allowed: Array<any>;
  
  @Output() onTag = new EventEmitter<any>();

  @Output() onFail = new EventEmitter<any>();

  tags:Array<any> = [];
  flag:boolean = false;
  svgStyles:any = {
    "fill": "purple",
    "height": "10pt",
    "width": "10pt"
  }
  tagStyles:any = {
    "background": "#eee",
    "font-style": "normal",
    "font-size": "21px",
    "color": "black",
  }
  tagBoxStyles:any = {
    "background": "#fff",
    "min-height": "100px",
    "height": "auto",
     "width": "300px"
  }
 
  inputStyle:any = {
    "background": this.tagBoxStyles.background,
    "color": "black",
    "max-width": "100%",
    "font-size": this.tagStyles["font-size"],
    "placeholder": "",
    
  }
  term:any = "";
  stop:boolean = false;
 
  


 
  constructor() { }

  ngOnInit(): void {
   
    this.dynamicStyles();
    this.onTag.emit(this.tags);
   
  }
  onSelect(item){
    this.term = item;
  }
  onEnter(){
    if(this.term != ""){
      let check = this.checkAllowed(this.term);
      if(check){
        this.tags.push(this.term);
        this.onTag.emit(this.tags);
      }else{
        this.onFail.emit("Not Allowed Tag");
      }
      this.term = "";
      this.placeHolderDecision();
    }
    
  }
  onDelete(){
    if(this.term == "" && this.flag){
      this.tags.pop();
      this.onTag.emit(this.tags);
      this.flag = false;
    }else if(this.term == ""){
      this.flag = true;
    }
    this.placeHolderDecision();
  }
  directDelete(index){
    this.tags.splice(index,1);
    this.onTag.emit(this.tags);
    this.placeHolderDecision();
  }

  placeHolderDecision(){
    if(this.tags.length > 0){
      this.inputStyle["placeholder"] = "";
    }else{
      this.inputStyle["placeholder"] = this.customStyles.tag_InputPlaceholder;
    }
  }

  checkAllowed(value): boolean{
    if(this.allowed.length > 0){
      for(let k=0; k<this.allowed.length; k++){
           if(this.allowed[k].toString().toLowerCase() == value){
             return true;
           }
      }
      return false;
    }else{
      return true;
    }
    
  }

  dynamicStyles(){
    if(this.customStyles.tagBox_fontColor != ""){
      this.tagStyles.color = this.customStyles.tagBox_fontColor;
    }
    if(this.customStyles.iconColor != ""){
      this.svgStyles.fill = this.customStyles.iconColor;
    }
    if(this.customStyles.tagBackground != ""){
      this.tagStyles.background = this.customStyles.tagBackground;
    }
    if(this.customStyles.tagFont != ""){
      this.tagStyles["font-style"] = this.customStyles.tagFont;
    }
    if(this.customStyles.tagSize != ""){
      this.customStyles['font-size'] = this.customStyles.tagSize;
    }
    if(this.customStyles.iconSize != ""){
      
       this.svgStyles["height"] = this.customStyles.iconSize;
       this.svgStyles["width"] = this.customStyles.iconSize;
    }
    if(this.customStyles.tagBox_minHeight != ""){
      this.tagBoxStyles["min-height"] = this.customStyles.tagBox_minHeight;
    }
    if(this.customStyles.tagBox_Height != ""){
      this.tagBoxStyles["height"] = this.customStyles.tagBox_Height;
      
    }
    if(this.customStyles.tagBox_Width != ""){
      this.tagBoxStyles["width"] = this.customStyles.tagBox_Width;
      
    }
    if(this.customStyles.tagBox_Background != ""){
      this.tagBoxStyles["background"] = this.customStyles.tagBox_Background;
      this.inputStyle["background"] = this.customStyles.tagBox_Background;
    }
    if(this.customStyles.tag_InputColor != ""){
      this.inputStyle["color"] = this.customStyles.tag_InputColor;
    }
    if(this.customStyles.tag_InputPlaceholder != ""){
      this.inputStyle["placeholder"] = this.customStyles.tag_InputPlaceholder;
    }
    
  }

}
