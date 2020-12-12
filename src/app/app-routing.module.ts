import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickerComponent } from './components/clicker/clicker.component';
import { ContentComponent } from './components/content/content.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { NameInputComponent } from './components/name-input/name-input.component';
import { UserGuard } from './guards/user/user.guard';

const routes: Routes = [
  {
    path: 'name',
    component: NameInputComponent
  },
  {
    path: '',
    canActivateChild: [UserGuard],
    component: ContentComponent,
    children: [
      { 
        path: 'leaderboard',
        component: LeaderboardComponent 
      },
      {
        path: 'clicker',
        component: ClickerComponent
      },
      {
        path: '**',
        redirectTo: 'clicker'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
