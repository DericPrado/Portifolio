import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileComponent} from '../app/components/perfil/perfil'
import { ExperienceComponent } from '../app/components/experiencia/experience';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileComponent, ExperienceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
