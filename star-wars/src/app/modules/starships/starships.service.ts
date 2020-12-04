import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable, BehaviorSubject } from "rxjs";
import { StarShip } from "../../models/starship";
import { map, concatMap, scan, shareReplay } from 'rxjs/operators';
import { StarShipResult } from "../../models/starship-result";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class StarShipsService {

  /**
   * Subject used to fire next page load without using subscriptions and unsubscriptions
   */
  starShipsNextPageSubject = new BehaviorSubject<string>(`${environment.apiUrl}/starships/`);
  starShipsNextPage$ = this.starShipsNextPageSubject.asObservable();

  /**
   * Observable which contains the List of all starships
   */
  //
  starShipsResultAll$: Observable<StarShipResult> =
    this.starShipsNextPage$.pipe(
      //pass url parameter to http service
      concatMap((url: string) => this.http.get(url)),
      //accumulate every http request in an array of results
      scan((ssresultacc: StarShipResult[], ssresult: StarShipResult) => (Array.isArray(ssresultacc) ? ssresultacc.concat(ssresult) : [ssresultacc, ssresult])),
      //convert the first request data into an array for simplicity
      map(ssresults => Array.isArray(ssresults) ? ssresults : [ssresults]),
      //create a result with the next url page and an array of all accumulated elelments
      map((ssresults: StarShipResult[]) => (
        {
          next: (ssresults) ? ssresults[ssresults.length - 1].next : '',
          results: ssresults.reduce((ssrs: StarShip[], ssr: StarShipResult) => ssrs.concat(
            //return the starships array with each starship id
            ssr.results.map(m => {
              m.id = this.getStarshipId(m);
              return m;
             })
            ), [])
        } as StarShipResult)),
      shareReplay(1));

  constructor(
    private http: HttpClient) {
  }

  getStarshipId(starship: StarShip): string {
    var url = starship.url;
    return url.split("/").filter(function (item) {
        return item !== "";
    }).slice(-1)[0];
  }

}
