import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWaysBindingComponent } from './two-ways-binding/two-ways-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { TestChildComponent } from './test-child/test-child.component';


@NgModule({
  declarations: [
    AppComponent,
    TwoWaysBindingComponent,
    StructuralDirectiveComponent,
    TestChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
