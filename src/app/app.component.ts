import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  customStyles = {
    iconColor: "",
    iconSize: "",
    tagBackground: "",
    tagFont: "",
    tagSize: "",
    tagBox_minHeight: "",
    tagBox_Height: "inherit",
    tagBox_Width: "inherit",
    tagBox_Background: "",
    tag_InputColor: "",
    tag_InputPlaceholder: "Favourites",
    tagBox_fontColor: "pink"
  };

  defaultValues:Array<any> = ["test", "test"];
  typeaheads:any = [
    'Adilabad',
    'Anantapur',
    'Chittoor',
    'Kakinada',
    'Guntur',
    'Hyderabad',
    'Karimnagar',
    'Khammam',
    'Krishna',
    'Kurnool',
    'Mahbubnagar',
    'Medak',
    'Nalgonda',
    'Nizamabad',
    'Ongole',
    'Hyderabad',
    'Srikakulam',
    'Nellore',
    'Visakhapatnam',
    'Vizianagaram',
    'Warangal',
    'Eluru',
    'Kadapa'
  ];
  allowedTags =  [];

  tagInput(tags){
    console.log(tags);
  }
  onFocus(e) {
    console.log('onFocus '+ e);
  }
  onFail(msg){
    alert(msg);
  }
}
