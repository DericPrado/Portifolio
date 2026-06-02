import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../../components/lista-projetos/lista-projetos.html',
  styleUrls: ['../../components/lista-projetos/lista-projetos.css']
})
export class ProjectListComponent implements OnInit {
  projects: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProjects().subscribe({
      next: (data) => this.projects = data,
      error: (err) => console.error('Erro ao carregar o JSON', err)
    });
  }
}