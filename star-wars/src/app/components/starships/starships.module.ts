import { NgModule } from "@angular/core";
import { StarShipListComponent } from "./starships-list/starships-list.component";
import { StarshipsRoutes } from "./starships.routes";
import { StarShipsService } from "./starships.service";

@NgModule({
  declarations: [ StarShipListComponent ],
  imports: [
    StarshipsRoutes
  ],
  providers: [
    StarShipsService
  ],
})
export class StarshipsModule { }
