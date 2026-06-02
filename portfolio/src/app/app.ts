import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileComponent} from '../app/components/perfil/perfil'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
