import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private API_KEY = '9b1b07c13f36aacfa16098cb35048573';

  constructor(private http: HttpClient) { }

  public getCartelera() {
    return this.getQuery('discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22');
  }

  private getQuery(query: string) {
    const URL = `https://api.themoviedb.org/3/${query}&api_key=${this.API_KEY}&language=es`;
    return this.http.jsonp(URL, 'callback');
  }
}
