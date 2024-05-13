import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxpayService {

  private booksUrl = 'https://ynhumjrgo3.execute-api.us-east-1.amazonaws.com/v1/taxpayers';

  constructor(private http: HttpClient) { }

  getTaxpayUsers(){
    return this.http.get(this.booksUrl);
  }

  postTaxpayUsers(body:any){
    return this.http.post(this.booksUrl,body);
  }
}
