import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@gugadev/wc-stories'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  schemas:  [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
