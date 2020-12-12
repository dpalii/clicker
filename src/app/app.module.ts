import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './components/content/content.component';
import { ClickerComponent } from './components/clicker/clicker.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { NameInputComponent } from './components/name-input/name-input.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { ModeSwitchComponent } from './components/mode-switch/mode-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ClickerComponent,
    LeaderboardComponent,
    NameInputComponent,
    ModeSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
