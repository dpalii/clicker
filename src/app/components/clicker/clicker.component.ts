import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard/leaderboard.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent implements OnInit {
  public name = '';
  public status = "PRESS THE BUTTON TO START";
  public mode = '5';
  public isRunning = false;
  private isPaused = false;
  private count = 0;

  constructor(
    private leaderboardService: LeaderboardService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.name = this.userService.name;
  }

  handleModeChange(event: string) {
    if (!this.isRunning) this.mode = event;
  }

  handleClick() {
    if (!this.isPaused) {
      if (!this.isRunning) {
        this.isRunning = true;
        const gameLength = parseInt(this.mode);
        this.count = 1;
        this.countdown(gameLength);
      }
      else {
        this.count += 1;
      }
  
      this.status = `CLICKS: ${this.count}`;
    }
  }

  countdown(time: number): void {
    if (time >= 0)
      setTimeout(() => this.countdown(time - 1), 1000);
    else {
      this.isRunning = false;
      this.isPaused = true;
      this.status = `GAME OVER. SCORE: ${this.count}`;

      this.leaderboardService.addResult({
        name: this.name,
        clicks: this.count,
        mode: this.mode
      });

      setTimeout(() => {
        this.isPaused = false;
        this.status = "PRESS THE BUTTON TO START";
      }, 3000);
    }
  }
}
