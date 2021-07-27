import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgconfTypeaheadComponent } from './ngconf-typeahead/ngconf-typeahead.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { NgconfTaginputComponent } from './ngconf-taginput/ngconf-taginput.component';

@NgModule({
  declarations: [NgconfTaginputComponent, NgconfTypeaheadComponent, SearchFilterPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NgconfTaginputComponent, CommonModule]
})
export class NgconfTaginputModule { }
