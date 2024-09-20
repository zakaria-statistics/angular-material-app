import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  updates = ['New features released!', 'Upcoming maintenance on Oct 20th'];
  router = inject(Router);
  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);

  }

  logOut() {
    // Logic to log out the user
  }

  gotToHome() {
    this.router.navigate(['/home']);
  }
}
