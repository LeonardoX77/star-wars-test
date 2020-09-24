import { NgModule } from "@angular/core";
import { StarshipsRoutes } from "./starships.routes";
import { StarShipsService } from "./starships.service";

@NgModule({
  declarations: [ ],
  imports: [
    StarshipsRoutes
  ],
  providers: [
    StarShipsService
  ],
})
export class StarshipsModule { }
