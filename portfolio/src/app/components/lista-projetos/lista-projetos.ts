import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './lista-projetos.html',
  styleUrls: ['./lista-projetos.css']
})
export class ListaProjetosComponent implements OnInit {
  projectsList: any[] = [];

  constructor(
    private portfolioService: PortfolioService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe({
      next: (data) => {
        this.projectsList = data;
        this.cdr.detectChanges(); // Garantindo que a tela atualize na hora!
      },
      error: (err) => {
        console.error('Erro ao carregar projetos:', err);
      }
    });
  }
}