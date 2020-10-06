import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRoutes } from "./login.routes";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from "../../shared/services/cookie.service";

@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    LoginRoutes,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CookieService
  ],
})
export class LoginModule { }
