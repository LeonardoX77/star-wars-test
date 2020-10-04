import { NgModule } from "@angular/core";
import { StarShipComponent } from "./starship/starship.component";
import { StarShipListComponent } from "./starships-list/starships-list.component";
import { StarshipsRoutes } from "./starships.routes";
import { StarShipsService } from "./starships.service";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ StarShipComponent, StarShipListComponent ],
  imports: [
    CommonModule,
    StarshipsRoutes
  ],
  providers: [
    StarShipsService
  ],
})
export class StarshipsModule { }
