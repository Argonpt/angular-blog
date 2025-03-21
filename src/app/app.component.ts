import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitleComponent } from './components/menu-title/menu-title.component'; // Ajusta o caminho conforme necessário
import { HomeComponent } from './pages/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true, // Torna o componente independente
  imports: [RouterOutlet, MenuTitleComponent, HomeComponent ], // Importa o MenuTitleComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog';
}
