import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public username: any;
  public roles:any;
  public isAuthenticated:boolean = false;
  public users:any = {
    'admin@gmail.com': ['ADMIN', 'STUDENT'],
    'user@gmail.com': ['STUDENT'],
  }
  constructor(private router: Router) { }

  login(username: string, password: string) {
    if (this.users[username] && password=='1234') {
      this.username = username;
      this.roles = this.users[username];
      this.isAuthenticated = true;
      return true;
    }else {
      return false;
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.username = undefined;
    this.roles = undefined;
    this.router.navigate(['/login']);
  }
}
