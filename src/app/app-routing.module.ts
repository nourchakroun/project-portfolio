import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './@core/mock/userList.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {RapportComponent } from './rapport/rapport.component';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';


export const routes: Routes = [
  {
    
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'search',
    component: RapportComponent
  },
  {
    
    path: 'pagesadmin',
    loadChildren: () => import('./pages/pagesAdmin.module')
      .then(m => m.PagesAdminModule),
  },
  {
    path:'welcome',
    component: LandingPageComponent
  },
 
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'loginv',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
     
      
    ],
  },
  
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  
  
];
const config: ExtraOptions = {
  useHash: false,
};
@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {
}
