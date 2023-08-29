import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-pokedex-logo></app-pokedex-logo>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'pokedex';
}
