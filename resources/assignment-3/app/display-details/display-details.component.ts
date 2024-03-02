import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrl: './display-details.component.css'
})
export class DisplayDetailsComponent {
  toggleDetails: Boolean = false;
  logClicks: Array<number> = [];
  comptClicks: number = 0;
  toggleParagraph = () => {
    this.toggleDetails = !this.toggleDetails;
    this.comptClicks++;
    this.logClicks.push(this.comptClicks);
  }
}
