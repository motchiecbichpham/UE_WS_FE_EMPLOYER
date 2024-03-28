import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent implements OnInit {
  profileForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    contact: ['', Validators.required],
    address: ['', Validators.required],
    postalCode: ['', Validators.required],
    introduction: ['', Validators.required],
    description: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get f() {
    return this.profileForm.controls;
  }

  onSubmit() {
    if (this.profileForm.invalid) {
      return;
    }
    // Submit logic here
  }

  resetForm() {
    this.profileForm.reset();
  }
}
