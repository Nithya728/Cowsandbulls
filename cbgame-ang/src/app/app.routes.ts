import { Routes } from '@angular/router';

import { authGuard } from './auth.guard';



export const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { 
    path: 'auth', 
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) 
  },
  { 
    path: 'games', 
    loadChildren: () => import('./cowsandbulls/cowsandbulls.module').then(m => m.CowsandbullsModule) 
  },


  
  ];
