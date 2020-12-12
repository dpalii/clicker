import { Injectable } from '@angular/core';

export interface Result {
  name: string;
  clicks: number;
  mode: string;
}

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private results: Result[];

  constructor() {
    this.results = [];
  }

  getResults(mode: string) {
    return this.results
      .filter(res => res.mode === mode)
      .sort((a, b) => b.clicks - a.clicks)
      .map((result, i) => ({...result, id: i}));
  }

  addResult(result: Result) {
    let found = false;

    this.results = this.results.map(item => {
      if (item.name === result.name && item.mode === result.mode) {
        found = true;
        if (item.clicks < result.clicks) {
          return result;
        }
      }
      return item;
    });

    if (!found) {
      this.results.push(result);
    }
  }
}
