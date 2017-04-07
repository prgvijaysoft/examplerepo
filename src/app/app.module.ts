
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRouteModule } from './app.route.module';

import { AppComponent }  from './Component/app.component';
import { LoginComponent } from './Component/login.component';

@NgModule({
  imports:      [ BrowserModule, AppRouteModule, FormsModule ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
