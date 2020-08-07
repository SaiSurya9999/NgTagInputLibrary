# Ngconf-Typeahead Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

> ![ngconf-taginput](https://img.icons8.com/office/48/000000/tags.png "Tag Feature") Typeahead Feature for Angular.  


### Demo Link   
[Stackblitz Demo](https://stackblitz.com/edit/ngconf-taginput "ngconf-taginput Demo") 

## Step - 1

> npm i ngconf-taginput --save  
[NPM Package Link](https://www.npmjs.com/package/ngconf-taginput "ngconf-taginput")  

## Step - 2  
Import NgconfTaginputModule in app.module.ts file.  

**app.module.ts**
```typescript
import {NgconfTaginputModule} from 'ngconf-taginput';
```

## Step - 3
This step is to quick start the usage of package later with the understanding of workflow you can  
modify the code.  
**app.component.ts**
 ```javascript
  term:any = "";
  stop:boolean = false;
  states:any = [
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
  ]

  onSelect(item){
    this.term = item;
  }
```
**app.component.html**
```html
<input type="text" [(ngModel)]="term" placeholder="States">
<ngconf-typeahead
(onSelect)="onSelect($event)" 
[typeaheads] = "states" 
[term]="term"
[stop]="stop"
></ngconf-typeahead>
```

## Explanation on Component Properties  
1 **(onSelect)** event is triggered when user interact with the typeahead list showed.  
2 **[typeaheads]** this input property is to take the data for typeahead preview filter.  
3 **[term]** this input property is for binding user input to the filter.  
4 **[stop]** this input property is for force stop typeahead functionality.  

## Styling of Typeahead Suggestions  
(Styles can be overwritten based on your application theme)   
> Styles can be overwritten in global styles file in angular project.  
1. **typeahead** class is for parent div styling.  
2. **typeaheadul** class is for ul tag which is parent for li tag.
3. **typeaheadli** class is for li elements of suggestions.  

**styles.css or styles.scss**
```css
.typeaheadul{
  background: #cce5ff;
}
.typeaheadli{
  color: purple;
}
.typeahead{
      box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
      padding: 10px;
}
```
> That's it you are good to go. Happy Coding :)
