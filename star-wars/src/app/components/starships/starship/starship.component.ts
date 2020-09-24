import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarShipComponent implements OnInit {

  getStarshipId() {
    // var url = ctrl.starship.url;
    // ctrl.shipId = url.split("/").filter(function (item) {
    //   return item !== "";
    // }).slice(-1)[0];
  }

  ngOnInit(): void {
    this.getStarshipId();
  }

}
