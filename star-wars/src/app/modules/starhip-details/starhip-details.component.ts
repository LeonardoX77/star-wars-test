import { Component, Input, OnInit } from '@angular/core';
import { ImageBase } from '../../shared/base/image-base';
import { StarShipDetailsService } from './starhip-details.service';

@Component({
  selector: 'starhip-details',
  templateUrl: './starhip-details.component.html',
  styleUrls: ['./starhip-details.component.scss']
})
export class StarShipDetailsComponent extends ImageBase implements OnInit {

  ship = this.starShipDetailsService.currentData;

  constructor(private starShipDetailsService: StarShipDetailsService) {
    super();
  }

  ngOnInit(): void {

  }
}
