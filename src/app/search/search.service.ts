import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = '3dc9b3393ff6d4bd025da368d08d503d';
  private language;

  constructor (private http: Http) {
  }

  searchMovies(query: string, page: number) {
    let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}&language=${this.language}&query=${query}&page=${page}`;

    return this.http.get(searchUrl)
      .map((res) => { return res.json() })
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
