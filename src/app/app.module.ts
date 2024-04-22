import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamuraiComponent } from './components/samurai/samurai.component';
import { HttpClientModule } from '@angular/common/http';
import { ClanComponent } from './components/clan/clan.component';
import { Samurai2Component } from './components/samurai2/samurai2.component';



@NgModule({
  declarations: [
    AppComponent,
    SamuraiComponent,
    Samurai2Component,
    //ClanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
