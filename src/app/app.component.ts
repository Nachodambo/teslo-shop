import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreFrontLayoutComponent } from './store-front/layouts/store-front-layout/store-front-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teslo-shop';
}
