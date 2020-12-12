import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivateChild {
  constructor(private userService: UserService, private router: Router) {}
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): true | UrlTree {
    return this.userService.name ? true : this.router.parseUrl('/name');
  }
}
