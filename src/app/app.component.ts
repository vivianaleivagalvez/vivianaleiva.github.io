import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StyleClassModule} from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StyleClassModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portafolio';
}
