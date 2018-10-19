import { Component } from '@angular/core';
import { QuoteService } from '../services/quote.service'
import { Quote } from '../models/quote.class';
@Component({
    selector: 'quote-inputs',
    templateUrl: './quote-inputs.component.html',
    styleUrls: ['./quote-inputs.component.scss']

})
export class QuoteInputsCOmponent{
    public quote  =  new Quote('', '')
    constructor(public quoteService: QuoteService){
      this.quoteService.getRandomQUote().subscribe((data: Quote) => {
        this.quote = new Quote(data.quote, data.author)    
      });
    }
}