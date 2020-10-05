import { Injectable } from "@angular/core";
import { StarShip } from "../../models/starship";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { tap } from "rxjs/operators";
import { StarShipsService } from "../starships/starships.service";

@Injectable()
export class StarShipDetailsService {
  currentData: StarShip;

  constructor(
    private http: HttpClient,
    private starShipsService: StarShipsService) { }

  get(id: string): Observable<StarShip> {
    return this.http.get<StarShip>(`${environment.apiUrl}/starships/${id}/`).pipe(
      tap(starship => {
        starship.id = this.starShipsService.getStarshipId(starship);
        this.currentData = starship
      })
    );
  }
}
