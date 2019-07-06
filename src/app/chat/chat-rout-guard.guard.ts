import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies';

@Injectable({
	providedIn: 'root'
})
export class ChatRoutGuardGuard implements CanActivate {
constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    console.log("in guard service");

    if (Cookie.get('authtoken') === undefined || Cookie.get('authtoken') === '' || Cookie.get('authtoken') === null) {

      this.router.navigate(['/']);

      return false;

    } else {

      return true;

    }

  }

}
