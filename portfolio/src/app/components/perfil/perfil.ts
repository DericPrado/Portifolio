import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class ProfileComponent implements OnInit {
  profileData: any;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe({
      next: (data: any) => {
        console.log('Chegou do JSON:', data);
        this.profileData = data;
      },
      error: (err: any) => {
        console.error('Erro ao carregar o perfil:', err);
      }
    });
  }
}