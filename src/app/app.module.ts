import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// forms and http
//
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// our service
//
import { GitApiService } from "./git-api.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GitApiService],  // our service
  bootstrap: [AppComponent]
})
export class AppModule { }
