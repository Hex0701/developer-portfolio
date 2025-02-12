import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DarkLightToggleComponent } from './dark-light-toggle/dark-light-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, NavigationBarComponent, DarkLightToggleComponent]
})
export class AppComponent {
  title = 'developer-portfolio';
}
