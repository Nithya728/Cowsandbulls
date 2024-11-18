import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { authGuard } from './auth.guard';
import { UserStatsComponentComponent } from './user-stats-component/user-stats-component.component';


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


  // { path: 'game', component: GameComponent , canActivate: [authGuard]},
  // { path: 'userstat', component: UserStatsComponentComponent , canActivate: [authGuard]},
  ];
