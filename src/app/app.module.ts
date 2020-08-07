import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgconfTaginputModule} from 'ngconf-taginput';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckComponent } from './check/check.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgconfTaginputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
