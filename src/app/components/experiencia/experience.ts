import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent implements OnInit {
  experiencesList: any[] = [];

  constructor(
    private portfolioService: PortfolioService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.portfolioService.getExperiences().subscribe({
      next: (data) => {
        this.experiencesList = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao carregar experiências:', err);
      }
    });
  }
}