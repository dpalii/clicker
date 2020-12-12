import { Component, OnInit } from '@angular/core';
import { LeaderboardService, Result } from '../../services/leaderboard/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  displayedColumns = ['id', 'name', 'clicks'];
  results: Result[] = [];
  mode = '5';  

  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit(): void {
    this.results = this.leaderboardService.getResults(this.mode);
  }

  handleModeChange(event: string) {
    this.mode = event;
    this.results = this.leaderboardService.getResults(this.mode);
  }
}
