import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";

export const authorizationGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthenticationService);
  let router = inject(Router);

  if(!authService.isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }else if(authService.isAuthenticated) {

    if(route.data && route.data['roles'] && route.data['roles'].length > 0) {
      console.log(route.data['roles']);
      console.log(authService.roles);
      const requiredRoles = route.data['roles'];
      const userRoles = authService.roles;

      //const isAuthorized = userRoles.some((role: { name: any; }) => role.name === requiredRoles);
      const isAuthorized = requiredRoles.some((role: any) => userRoles.includes(role));


      if(!isAuthorized) {
        router.navigate(['/unauthorized']);
        return false;
      }

    }

  }
  return true;
};
