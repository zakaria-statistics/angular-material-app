import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.css'
})
export class UnauthorizedComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['admin']); // Redirect user to the home page or desired route
  }
}
