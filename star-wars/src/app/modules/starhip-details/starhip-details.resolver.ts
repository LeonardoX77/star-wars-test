import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StarShip } from '../../models/starship';
import { StarShipDetailsService } from './starhip-details.service';

@Injectable()
export class StarshipResolver implements Resolve<StarShip> {

  constructor(private starShipDetailsService: StarShipDetailsService) { }

  resolve(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<StarShip> {
    return this.starShipDetailsService.get(route.params.id);
  }
}
