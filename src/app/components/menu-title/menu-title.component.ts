import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  standalone: true, // Torna o componente independente,
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css'] // Correção aqui
})
export class MenuTitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Código ao iniciar o componente (se necessário)
  }
}
