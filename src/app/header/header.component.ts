import { Component, OnInit } from '@angular/core';
import { MoviesService }            from '../movies/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'MovieDB';
  language : string;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.language = this.moviesService.getLanguage();
  }

  changeLanguage(lang : string) {
    if (lang === 'hu') this.moviesService.changeLanguage('hu');
    else this.moviesService.changeLanguage('en');
    location.reload();
  }
}
