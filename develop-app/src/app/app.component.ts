import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'develop-app';
  huongDan: string[] = [
    '1. ng new app',
    '2. ng s',
    '3. ng build',
    '4. ng create lib',
    '5. ng build lib'
  ]
}
