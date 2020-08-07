import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges, Input } from '@angular/core';


export interface styleCustom{
  iconColor: String,
  iconSize: String,
  tagBackground: String,
  tagFont: String,
  tagSize: String,
  tagBox_Background: String,
  tagBox_minHeight: String,
  tagBox_Height: String,
  tagBox_Width:String,
  tag_InputColor: String,
  tag_InputPlaceholder: String
}

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit,OnChanges {
  @ViewChild('tag', { static: true }) tagInput: ElementRef;
  

  //To Force Stop Type Ahead
  @Input() customStyles:styleCustom;
  
  @Output() onTag = new EventEmitter<any>();

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
    "font-size": "21px"
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
    "max-width": this.tagBoxStyles.width,
    "font-size": this.tagStyles["font-size"],
    "placeholder": ""
  }
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.customStyles);
    this.dynamicStyles();
    this.onTag.emit(this.tags);
  }

  onEnter(){
    if(this.tagInput.nativeElement.value != ""){
      this.tags.push(this.tagInput.nativeElement.value);
      this.onTag.emit(this.tags);
      this.tagInput.nativeElement.value = "";
    }
    
  }
  onDelete(){
    if(this.tagInput.nativeElement.value == "" && this.flag){
      this.tags.pop();
      this.onTag.emit(this.tags);
      this.flag = false;
    }else if(this.tagInput.nativeElement.value == ""){
      this.flag = true;
    }
  }
  directDelete(index){
    this.tags.splice(index,1);
    this.onTag.emit(this.tags);
  }

  dynamicStyles(){
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
      console.log("Came Here");
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
    }
    if(this.customStyles.tag_InputColor != ""){
      this.inputStyle["color"] = this.customStyles.tag_InputColor;
    }
    if(this.customStyles.tag_InputPlaceholder != ""){
      this.inputStyle["placeholder"] = this.customStyles.tag_InputPlaceholder;
    }
  }
ngOnChanges(changes: SimpleChanges){
  console.log("changes "+changes);
}
 

}
