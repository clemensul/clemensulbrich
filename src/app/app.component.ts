import { Component, OnInit } from '@angular/core';
import { GREETINGS } from '../assets/greetings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme: boolean;
  greeting: string;

  constructor() {
    const initialized = localStorage.getItem('theme') !== null;

    if (!initialized) {
      this.isDarkTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
    } else {
      this.isDarkTheme = !!localStorage.getItem('theme');
    }

    this.switchTheme(this.isDarkTheme);
  }

  ngOnInit(): void {
    this.greeting = this.getRandomGreeting();
  }

  onThemeChange(value: boolean): void {
    this.switchTheme(value);
  }

  private getRandomGreeting(): string {
    const rand = Math.random();
    return GREETINGS[Math.round(rand * (GREETINGS.length - 1))];
  }

  private switchTheme(dark: boolean): void {
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      return;
    }

    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.removeItem('theme');
  }
}
