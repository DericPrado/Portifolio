import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private perfilUrl = 'data/perfil.json';
  private experienciaUrl = 'data/experiencia.json';
  private projetosUrl = 'data/projetos.json';

  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    return this.http.get<any>(this.perfilUrl);
  }

  getExperiences(): Observable<any[]> {
    return this.http.get<any[]>(this.experienciaUrl);
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.projetosUrl);
  }
}