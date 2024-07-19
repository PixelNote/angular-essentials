import { Component, signal } from '@angular/core';
import { results } from './investment-results/investment-result.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  resultsData = signal<results[] | undefined>(undefined);

  
}
