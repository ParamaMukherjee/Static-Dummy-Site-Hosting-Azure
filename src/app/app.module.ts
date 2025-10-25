import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // <--- add this
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@NgModule({
  declarations: [
    AppComponent,
    ApiService
  ],
  imports: [
    BrowserModule,
    HttpClientModule // <--- add here
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }