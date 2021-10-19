import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HeroesModule ],
  declarations: [ AppComponent,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
