import { SiteListComponent } from './list/site-list/site-list.component';

import { RegisterComponent } from './users/register/register.component';
import { UserListComponent } from './@core/mock/userList.component';
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserService } from './user-service.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FeaturesComponent } from './list/features/features.component';
import { RapportComponent } from './rapport/rapport.component';




@NgModule({
  
  
  declarations: [AppComponent, LandingPageComponent,UserListComponent,RegisterComponent,SiteListComponent,LoginComponent, RapportComponent],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    FormsModule,
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
