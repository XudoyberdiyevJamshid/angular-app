import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Profile } from './profile/profile';
import { authGuard } from './auth-guard';
import { Admin } from './admin/admin';
import { Dashboard } from './admin/dashboard/dashboard';
import { Settings } from './admin/settings/settings';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
  { path: 'profile', component: Profile, canActivate: [authGuard] },
  {
    path: 'admin', 
    component: Admin,
    children:[
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      { path: 'dashboard', component: Dashboard },
      { path: 'settings', component: Settings }
    ]
  }
];
