import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'employer';
  showHead: boolean = false;
  constructor(private router: Router) {
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/login' || event['url'] =='/sign-up') {
            this.showHead = false;
          } else {
            this.showHead = true;
          }
        }
      });
    }
  logout() {
    // Perform logout logic here (e.g., clear authentication token)
    // Then navigate to the login page
    this.router.navigate(['/login']);
  }
}
