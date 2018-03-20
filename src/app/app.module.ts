import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KaraktaererComponent } from './karaktaerer/karaktaerer.component';
import { TvComponent } from './tv/tv.component';

@NgModule({
  declarations: [
    AppComponent,
    KaraktaererComponent,
    TvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
