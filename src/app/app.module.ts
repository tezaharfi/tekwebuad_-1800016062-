import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Praktikum1Component } from './pages/praktikum1/praktikum1.component';
import { Praktikum2Component } from './pages/praktikum2/praktikum2.component';

@NgModule({
  declarations: [
    AppComponent,
    Praktikum1Component,
    Praktikum2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
