import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-app';

  constructor(private router: Router) { }

  onRouteTo(page: string) {
    this.router.navigate([page]);
  }
}
