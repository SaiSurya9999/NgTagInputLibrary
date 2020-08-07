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
    tagBox_Height: "",
    tagBox_Width: "",
    tagBox_Background: "",
    tag_InputColor: "",
    tag_InputPlaceholder: "Favourites"
  };

  tagInput(tags){
    console.log(tags);
  }
}
