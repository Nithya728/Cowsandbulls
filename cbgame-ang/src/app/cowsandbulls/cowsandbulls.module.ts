import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameguessComponent } from './gameguess/gameguess.component';
import { GameinstructionsComponent } from './gameinstructions/gameinstructions.component';
import { GamescoreComponent } from './gamescore/gamescore.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'gameguess', component: GameguessComponent },
  
  { path: 'gameinstruction', component: GameinstructionsComponent },
  { path: 'gamescore', component: GamescoreComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  GameguessComponent,GameinstructionsComponent,GamescoreComponent
  ],
  exports: [RouterModule]
})
export class CowsandbullsModule { }
