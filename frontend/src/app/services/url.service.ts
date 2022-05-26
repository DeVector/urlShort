import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../components/models/Url';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Url[]> {
    return this.http.get<Url[]>(`${API_CONFIG.baseUrl}/urls/list`)
  }

  save(url: Url): Observable<Url>{
    return this.http.post<Url>(`${API_CONFIG}/urls/create`, url)
  }
}
