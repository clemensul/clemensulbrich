import { Component, OnInit } from '@angular/core';
import { GREETINGS } from '../assets/greetings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  greeting: string;

  ngOnInit() {
    this.greeting = this.getRandomGreeting();
  }

  private getRandomGreeting(): string {
    const rand = Math.random();
    return GREETINGS[Math.round(rand * (GREETINGS.length - 1))];
  }
}
