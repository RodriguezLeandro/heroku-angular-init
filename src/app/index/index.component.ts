import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Greeting } from 'src/model/greeting';
import { GreetingService } from 'src/services/greeting.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent{
  
  public title = 'test-angular-heroku-app';
  public userName: string = '';
  public greetingText: Observable<Greeting>;

  constructor(private greetingService: GreetingService) {}

  public greetings() : void {

    this.greetingText = this.greetingService.getGreetingsResponse(this.userName);
  }
}
