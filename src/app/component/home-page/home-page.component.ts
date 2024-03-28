import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  companyName = 'Your Company Name';
  currentDate: string;
  newApplicationsCount = 5;
  jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      location: 'New York',
      postedDate: new Date('2024-03-29'),
      applications: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
      ],
    },
    {
      id: 2,
      title: 'Data Analyst',
      location: 'San Francisco',
      postedDate: new Date('2024-03-28'),
      applications: [
        { id: 3, name: 'Alice Johnson' },
        { id: 4, name: 'Bob Brown' },
      ],
    },
  ];

  constructor() {
    this.currentDate = formatDate(new Date(), 'mediumDate', 'en-US'); // Format current date
  }
}
