import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(
    // tslint:disable-next-line: variable-name
    private _service: MoviesService
  ) { }

  ngOnInit(): void {
    this._service.getCartelera().subscribe(data => console.log(data));
  }

}
