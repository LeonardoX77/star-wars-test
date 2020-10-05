import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StarShipDetailsComponent } from "./starhip-details.component";
import { StarshipDetailsRoutes } from "./starhip-details.routes";
import { StarShipDetailsService } from "./starhip-details.service";
import { StarshipResolver } from "./starhip-details.resolver";

@NgModule({
  declarations: [ StarShipDetailsComponent ],
  imports: [
    CommonModule,
    StarshipDetailsRoutes
  ],
  providers: [
    StarShipDetailsService, StarshipResolver
  ],
})
export class StarshipDetailsModule { }
