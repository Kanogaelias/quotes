import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { Quote } from '../models/quote.class';
@Component({
    selector: 'quote-inputs',
    templateUrl: './quote-inputs.component.html',
    styleUrls: ['./quote-inputs.component.scss']

})
export class QuoteInputsCOmponent {
    public quote  =  new Quote("0", "new Date")
    constructor(public quoteService: QuoteService){
    this.getQuote();
}
 public getQuote() {
    this.quoteService.getRandomQUote().subscribe((data: Quote) => {
        this.quote = new Quote(data.quote, data.author)    
        console.log(this.quote);
      });
    }
    @Output() addQuote=new EventEmitter<Quote>();
    submitQuote(){
        this.addQuote.emit(this.quote);
    }
 }
 
