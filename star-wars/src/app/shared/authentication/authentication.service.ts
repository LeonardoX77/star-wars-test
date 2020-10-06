

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommandResult } from '../../models/command-result';
import { User } from '../../models/user';
import { CookieService } from '../services/cookie.service';
import { CookieUser } from '../../models/cookie-user';
import { Base64 } from '../helpers/base64.helper';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  dataLoading = false;
  currentUser: User;

  constructor(
    private userService: UserService,
    private cookieService: CookieService) {

  }

  isLoggedInUser(): boolean {
    const cookie = this.getLoggedInUser()
    return cookie && cookie.currentUser && cookie.currentUser.authdata ? true : false;
  }

  getLoggedInUser(): CookieUser {
    const data = this.cookieService.get('globals');
    if (data) {
      return JSON.parse(data) as CookieUser;
    }

    return null;
  }

  login(username, password): Observable<CommandResult> {
    this.dataLoading = true;

    return new Observable(observer => {
      /* Dummy authentication for testing, uses $timeout to simulate api call
      ----------------------------------------------*/
      setTimeout(() => {
        return this.userService.getByUsername(username)
          .subscribe(
            user => {
              debugger;
              this.dataLoading = false;
              var response: CommandResult;
              if (user && user.password === password) {
                response = { success: true };
              } else {
                response = { success: false, message: 'Username or password is incorrect' };
              }
              observer.next(response);
            });
      }, 1000);
    });
  }

  setCredentials(user: User) {
    var authdata = Base64.encode(user.username + ':' + user.password);

    this.currentUser = user;

    const cookie: CookieUser = {
      currentUser: {
        username: user.username,
        authdata: authdata
      }
    };

    // note: this now is implemented in AuthenticationInterceptor
    // $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;

    // store user details in globals cookie that keeps user logged in for 1 week (or until they logout)
    var cookieExp = new Date();
    cookieExp.setDate(cookieExp.getDate() + 7);
    this.cookieService.set('globals', JSON.stringify(cookie), { expires: cookieExp });
  }

  ClearCredentials() {
    this.currentUser = null;
    this.cookieService.delete('globals');

    // note: this now is implemented in AuthenticationInterceptor
    // $http.defaults.headers.common['Authorization'] = 'Basic';
  }

  register(user: User): Observable<CommandResult> {
    this.dataLoading = true;
    return this.userService.Create(user).pipe(tap(() => this.dataLoading = false));
  }

}
