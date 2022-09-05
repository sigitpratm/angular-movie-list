import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'default-card',
  templateUrl: './default-card.component.html',
  styleUrls: ['default-card.component.sass'],
})
export class DefaultCardComponent implements OnInit {
  movies: any;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe((res) => {
      this.movies = res.Search;
    });
  }
}
