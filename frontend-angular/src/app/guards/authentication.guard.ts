import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";

export const authenticationGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthenticationService);
  let router = inject(Router);
  if (authService.isAuthenticated) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
