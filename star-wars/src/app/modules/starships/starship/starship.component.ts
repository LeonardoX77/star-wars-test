import { Component, Input, OnInit } from '@angular/core';
import { StarShip } from '../../../models/starship';
import { ImageHelper } from '../../../shared/helpers/image.helper';

@Component({
  selector: 'starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarShipComponent extends ImageHelper {
  @Input() starship: StarShip
}
