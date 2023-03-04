import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { routes } from './routing';
import { HttpService } from './http.service';
import { UtilityService } from './utility.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CustomersComponent } from './customers/customers.component';
import { AddcustomerComponent } from './customers/addcustomer/addcustomer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddcontactComponent } from './contacts/addcontact/addcontact.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { SearchPipe } from './search.pipe';
import { AgePipe } from './age.pipe';
import { AboutComponent } from './about/about.component';
import { ContactDetails2Component } from './contacts/contact-details/contact-details2/contact-details2.component';
import { CustomerDetails2Component } from './customers/customer-details/customer-details2/customer-details2.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    ErrorPageComponent,
    CustomersComponent,
    AddcustomerComponent,
    ContactsComponent,
    AddcontactComponent,
    CustomerEditComponent,
    ContactEditComponent,
    CustomerDetailsComponent,
    ContactDetailsComponent,
    SearchPipe,
    AgePipe,
    AboutComponent,
    ContactDetails2Component,
    CustomerDetails2Component,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserModule,
    SocialLoginModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    HttpService,
    UtilityService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '824790361020-4t37cml684s7btqlsp4osmgn9veh2s3e.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
