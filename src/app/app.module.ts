import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { RegisterPageComponent } from './component/register-page/register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilePageComponent } from './component/profile-page/profile-page.component';
import { JobPostPageComponent } from './component/job-post-page/job-post-page.component';
import { JobCardComponent } from './layout/job-card/job-card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JobDetailPageComponent } from './component/job-detail-page/job-detail-page.component';
import { AppInterceptorService } from './service/app-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ProfilePageComponent,
    JobPostPageComponent,
    JobCardComponent,
    JobDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
