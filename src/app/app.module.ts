import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from './_ui-component/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ResponsiveService } from './_services/responsive.service';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountActivatedComponent } from './account-activated/account-activated.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResendActivationLinkComponent } from './resend-activation-link/resend-activation-link.component';
import { WrongActivationLinkComponent } from './wrong-activation-link/wrong-activation-link.component';
import { AccountDeletedComponent } from './account-deleted/account-deleted.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    PageNotFoundComponent,
    AccountActivatedComponent,
    HeaderComponent,
    FooterComponent,
    ResendActivationLinkComponent,
    WrongActivationLinkComponent,
    AccountDeletedComponent,
    PrivacyComponent,
    TermsComponent,
    DisclaimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    ResponsiveService,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
