import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Greeting } from 'src/model/greeting';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor(private http : HttpClient) {}

  public getGreetingsResponse(name: string) : Observable<Greeting> {

    const url = `${environment.apiUrl}/greeting?name=${name}`;

    return this.http.get<Greeting>(url);
  }
}
