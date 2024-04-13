import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from '../../type/company';
import { CONSTANT } from '../../api/constants';
import { AuthService } from '../../service/auth.service';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent implements OnInit {
  cities = CONSTANT.cities;

  profileForm: FormGroup = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    contact: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    introduction: ['', Validators.required],
    description: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notiService: NotificationService
  ) {}
  setFormValues(company: Company) {
    this.profileForm.setValue(company);
  }
  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit() {
    if (this.profileForm.invalid) {
      return;
    }
    this.updateProfile();
  }

  updateProfile() {
    this.authService.updateCompany(this.profileForm.value).subscribe(
      (response) => {

        this.notiService.showNotification(
          'Update successfully',
          'Close'
        );
        localStorage.setItem('companyProfile', JSON.stringify(response));
      },
      (error) => {
        this.notiService.showNotification(error.error.message, 'Close', false);
      }
    );
  }
  resetForm() {
    const profile = localStorage.getItem('companyProfile');
    const profileCompany: Company = profile ? JSON.parse(profile) : null;
    this.setFormValues(profileCompany);
  }
}
