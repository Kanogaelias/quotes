import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuoteService } from '../services/quote.service';
import { QuoteInputsCOmponent } from '../quote-inputs/quote-inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteInputsCOmponent 
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ QuoteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
