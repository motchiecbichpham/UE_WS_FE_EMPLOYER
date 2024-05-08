import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CONSTANT } from '../../api/constants';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent implements OnInit {
  cities = CONSTANT.cities;
  registerForm: FormGroup = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    contact: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    introduction: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notiService: NotificationService
  ) {}
  ngOnInit(): void {}

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.signup();
  }

  signup() {
    this.authService.signup(this.registerForm.value).subscribe(
      (response) => {
        this.notiService.showNotification(
          'Company created successfully',
          'Close'
        );
        this.router.navigate(['/login']);
      },
      (error) => {
        this.notiService.showNotification(error.error.message, 'Close', false);
      }
    );
  }
}
