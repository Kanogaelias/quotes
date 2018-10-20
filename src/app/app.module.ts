import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteService } from '../services/quote.service';
import { QuoteInputsCOmponent } from '../quote-inputs/quote-inputs.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteInputsCOmponent,
    QuoteFormComponent 
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ QuoteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
