import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../type/job';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css',
})
export class JobCardComponent implements OnInit {
  constructor(private router:Router) {

  }
  ngOnInit(): void {

  }
  @Input() job: Job | undefined;

  
}
