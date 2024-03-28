import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { RegisterPageComponent } from './component/register-page/register-page.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ProfilePageComponent } from './component/profile-page/profile-page.component';
import { JobPostPageComponent } from './component/job-post-page/job-post-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: RegisterPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'job-post', component: JobPostPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
