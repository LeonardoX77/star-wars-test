import { Component } from '@angular/core';
import { StarShipsService } from '../starships.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarShipListComponent {
  starShips$ = this.starShipsService.getStarships();

  constructor(private starShipsService: StarShipsService) {

  }
}
