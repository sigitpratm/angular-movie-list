import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = 'https://www.omdbapi.com?apikey=2666fe42&s=Batman&page=1';

  constructor(private httpClient: HttpClient) {}

  public getMovies(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
