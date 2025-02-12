import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-light-toggle',
  standalone: true,
  imports: [],
  templateUrl: './dark-light-toggle.component.html',
  styleUrls: ['./dark-light-toggle.component.scss']
})
export class DarkLightToggleComponent {
  toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }
}
