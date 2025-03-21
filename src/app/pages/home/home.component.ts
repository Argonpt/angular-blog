import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from '../../components/big-card/big-card.component'; // Ajusta o caminho conforme necessário
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BigCardComponent, MenuTitleComponent, SmallCardComponent, MenuBarComponent], // Importa os componentes necessários
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


constructor() { }
ngOnInit(): void {
    
}

}
