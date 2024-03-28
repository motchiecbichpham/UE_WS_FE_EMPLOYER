import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-post-page',
  templateUrl: './job-post-page.component.html',
  styleUrl: './job-post-page.component.css',
})
export class JobPostPageComponent {
  jobForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    salary: ['', Validators.required],
    workplace: ['', Validators.required],
    yearOfExp: ['', Validators.required],
    contract: ['', Validators.required],
    expiredDate: ['', Validators.required],
    status: ['', Validators.required],
    amountHiring: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get f() {
    return this.jobForm.controls;
  }

  onSubmit() {
    if (this.jobForm.invalid) {
      return;
    }
    // Submit logic here
  }

  resetForm() {
    this.jobForm.reset();
  }
}
