import { Component, Input, OnInit } from '@angular/core';
import { StarShip } from '../../../models/starship';
import { ImageBase } from '../../../shared/base/image-base';

@Component({
  selector: 'starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarShipComponent extends ImageBase {
  @Input() starship: StarShip
}
