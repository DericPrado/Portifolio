import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class ProfileComponent implements OnInit {
  profileData: any;

  constructor(
    private portfolioService: PortfolioService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe({
      next: (data: any) => {
        this.profileData = data;
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('Erro ao carregar o perfil:', err);
      }
    });
  }
}