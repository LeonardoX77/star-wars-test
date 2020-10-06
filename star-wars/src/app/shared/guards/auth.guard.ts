import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authenticationService.isLoggedInUser()) {
            // not logged in so redirect to login page with the return url (to redirect again after login ok)
            // replace %20 with a white space to avoid converting % to %25 and geting %2520
            let url = state.url;
            url = url.replace('%20', ' ');

            this.router.navigate(['login'], { queryParams: { returnUrl: url } });
            return false;
        }

        return true;
    }
}
