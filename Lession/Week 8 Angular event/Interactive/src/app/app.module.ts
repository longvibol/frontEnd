import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestChildComponent } from './test-child/test-child.component';
import { HomeworkComponent } from './homework/homework.component';

@NgModule({
  declarations: [
    AppComponent,
    TestChildComponent,
    HomeworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
