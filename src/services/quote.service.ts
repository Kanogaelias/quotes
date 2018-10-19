 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 
 @Injectable()
 export class QuoteService {
     constructor(public http: HttpClient){

     }

     public getRandomQUote(){
         return this.http.get('https://http://localhost:4200/')
         
     }
 }