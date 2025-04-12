import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PolaroidCardComponent } from './components/polaroid-card/polaroid-card.component';

@Component({
  selector: 'app-root',
  imports: [PolaroidCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
  <app-polaroid-card></app-polaroid-card>
  <router-outlet></router-outlet>
`
})
export class AppComponent {
  title = 'D.Alves';
}
