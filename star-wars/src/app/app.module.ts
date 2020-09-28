import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// To solve the error "Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option in your tsconfig or jsconfig to remove this warning"
// In Visual Code Studio Go to File >> Preferences >> Settings, Search "decorator" in search field and Checking the option JavaScript › Implicit Project Config: Experimental Decorators" solved the problem.

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
