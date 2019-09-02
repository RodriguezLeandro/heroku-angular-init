import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Greeting } from 'src/model/greeting';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor(private http : HttpClient) {}

  public getGreetingsResponse(name: string) : Observable<Greeting> {

    const url = `https://damp-spire-33229.herokuapp.com/greeting?name=${name}`;
    // const url = `http://localhost:8080/greeting?name=${name}`;

    return this.http.get<Greeting>(url);
  }
}
