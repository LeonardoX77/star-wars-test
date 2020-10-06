import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthenticationService,
    private userService: UserService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newRequest: HttpRequest<any>;

    const user = this.authService.getLoggedInUser();
    if (user) {
      newRequest = request.clone({ setHeaders: { Authorization: `Basic ${user.currentUser.authdata}` } });
    } else {
      this.authService.ClearCredentials();
    }

    return next.handle(newRequest)
      .pipe(
        catchError(error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.authService.ClearCredentials();
            }
          }
          return throwError(error);
        })
      );
  }
}
