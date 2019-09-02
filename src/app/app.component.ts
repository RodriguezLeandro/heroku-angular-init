import { Component } from '@angular/core';
import { GreetingService } from 'src/services/greeting.service';
import { Greeting } from 'src/model/greeting';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'test-angular-heroku-app';
  public userName: string = '';
  public greetingText: Observable<Greeting>;

  constructor(private greetingService: GreetingService) {}

  public greetings() : void {

    this.greetingText = this.greetingService.getGreetingsResponse(this.userName);
  }
}
