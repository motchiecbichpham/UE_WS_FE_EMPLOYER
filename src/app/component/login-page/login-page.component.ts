import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  ngOnInit(): void {
    localStorage.setItem('token', '');
    localStorage.setItem('companyProfile', '');
  }

  loginForm: FormGroup = this.fb.group({
    contact: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notiService: NotificationService
  ) {}
  submit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.login();
  }
  @Input() error: string | null | undefined;

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem(
          'companyProfile',
          JSON.stringify(response.company)
        );
        this.router.navigate(['/home']);
        this.notiService.showNotification('Login successfully', 'Close');
      },
      (error) => {
        this.notiService.showNotification("Login failed", 'Close', false);
      }
    );
  }
}
