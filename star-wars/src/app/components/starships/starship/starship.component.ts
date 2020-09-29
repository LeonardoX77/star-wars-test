import { Component, Input, OnInit } from '@angular/core';
import { StarShip } from '../../../models/account';

@Component({
  selector: 'starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarShipComponent implements OnInit {
  @Input() starship: StarShip
  shipId: string;

  ngOnInit(): void {
    this.getStarshipId();
  }

  getStarshipId() {
    var url = this.starship.url;
    this.shipId = url.split("/").filter(function (item) {
        return item !== "";
    }).slice(-1)[0];
  }
}
