import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  addGame(name, price) {
    console.log("Inside Add");
    const uri = 'http://10.204.43.206:5008/game';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const obj = {
      name: 'ABC',
      price: 123
    };
    this.http.post(uri, { name: 'ABC', price: 123 }, httpOptions).subscribe(res => console.log('Done'));
    //this.http.post(uri, obj).subscribe(res => console.log('Done'));
  }
}