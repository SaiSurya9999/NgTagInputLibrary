import { Pipe, PipeTransform } from '@angular/core';

//Configuration for Pipe Input Args
export interface opt {
  term: string;
  prop: string;
}

@Pipe({
  name: 'searchFilter',
  pure: false
})

export class SearchFilterPipe implements PipeTransform {

  transform(value: any, opt?: opt): any {

    //If Array in ngFor is empty
    if (!value) return null;
    //If Search term is Empty
    if (!opt.term) return value;

    //For Better Results
    opt.term = opt.term.toString().toLowerCase();

    //let result = value.map(({ name }) => name);
    //let result = value.map(a => a.name);

    if (opt.prop) {
      if (opt.prop.toString() != "") {
        let result = value.map(a => a[opt.prop.toString()]);
        //Filtered Results based on Search Term
        return value.filter(function (item) {
          // console.log(item);
          return JSON.stringify(item[opt.prop.toString()]).toLowerCase().includes(opt.term.toString());
        });
      }
    } else {
      //Filtered Results based on Search Term
      return value.filter(function (item) {
        // console.log(item);
        return JSON.stringify(item).toLowerCase().includes(opt.term.toString());
      });
    }


  }

}
