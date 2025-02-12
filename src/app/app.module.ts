import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DarkLightToggleComponent } from './dark-light-toggle/dark-light-toggle.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: AppRoutingModule, useValue: AppRoutingModule },
    HeroComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactFormComponent,
    NavigationBarComponent,
    DarkLightToggleComponent
  ]
});
