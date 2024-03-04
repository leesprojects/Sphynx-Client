import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface IExampleDashboardCard {
  title: string;
  content: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  exampleDashboardCards: IExampleDashboardCard[] = [
    { title: 'Item 1', content: 'Content for Item 1' },
    { title: 'Item 2', content: 'Content for Item 2' },
    { title: 'Item 3', content: 'Content for Item 3' },
    { title: 'Item 4', content: 'Content for Item 4' },
    { title: 'Item 5', content: 'Content for Item 5' },
    { title: 'Item 6', content: 'Content for Item 6' },
    { title: 'Item 7', content: 'Content for Item 7' },
    { title: 'Item 8', content: 'Content for Item 8' },
    { title: 'Item 9', content: 'Content for Item 9' },
    { title: 'Item 10', content: 'Content for Item 10' }
  ];

  constructor(
    private _router: Router
  ) {
  }

  navigateToTrainerDashboard(): void {
    this._router.navigate(['/trainer']);
  }
}
