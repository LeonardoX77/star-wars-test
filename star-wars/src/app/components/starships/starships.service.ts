import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpService } from "../services/http.service";

@Injectable()
export class StarShipsService {

  constructor(private httpService: HttpService) {

  }
  GetStarships() {

    const url = `${environment.apiUrl}/starships/`;
    this.httpService.get(url).subscribe(res => res.data);
  }
}
