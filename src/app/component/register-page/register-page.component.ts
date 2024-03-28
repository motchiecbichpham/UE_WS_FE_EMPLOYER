import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    contact: ['', Validators.required],
    address: ['', Validators.required],
    postalCode: ['', Validators.required],
    introduction: ['', Validators.required],
    description: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit(): void {}

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.signup();
    // this.router.navigate(['/login']);
  }
  @Input() error: string | null | undefined;

  signup() {
    this.authService.signup(this.registerForm.value).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Signup error:', error);
      }
    );
  }
}
