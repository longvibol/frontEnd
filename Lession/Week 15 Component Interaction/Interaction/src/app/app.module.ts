import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyifDirective } from './myif.directive';
import { Myifv3Directive } from './myifv3.directive';


@NgModule({
  declarations: [
    AppComponent,
    MyifDirective,
    Myifv3Directive    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
