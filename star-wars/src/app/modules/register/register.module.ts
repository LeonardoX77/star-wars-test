import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from "../../shared/services/cookie.service";
import { RegisterComponent } from "./register.component";
import { RegisterRoutes } from "./register.routes";

@NgModule({
  declarations: [ RegisterComponent ],
  imports: [
    CommonModule,
    RegisterRoutes,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CookieService
  ],
})
export class RegisterModule { }
