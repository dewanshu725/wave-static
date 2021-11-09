import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountActivatedComponent } from './account-activated/account-activated.component';
import { AccountDeletedComponent } from './account-deleted/account-deleted.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ResendActivationLinkComponent } from './resend-activation-link/resend-activation-link.component';
import { SignupComponent } from './signup/signup.component';
import { TermsComponent } from './terms/terms.component';
import { WrongActivationLinkComponent } from './wrong-activation-link/wrong-activation-link.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "account-deleted",
    component: AccountDeletedComponent
  },
  {
    path: "account-activated",
    component: AccountActivatedComponent
  },
  {
    path: "resend-activation-link",
    component: ResendActivationLinkComponent
  },
  {
    path: "wrong-activation-link",
    component: WrongActivationLinkComponent
  },
  {
    path: "privacy-policy",
    component: PrivacyComponent
  },
  {
    path: "disclaimer",
    component: DisclaimerComponent
  },
  {
    path: "terms-and-conditions",
    component: TermsComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
