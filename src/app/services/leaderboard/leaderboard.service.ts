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
  constructor() {}

  getResults(mode: string | null): Result[] {
    let resultJson = localStorage.getItem('results');
    let results = [];
    try {
      if (resultJson) {
        resultJson = resultJson as string;
        results = JSON.parse(resultJson);
      }
    }
    catch(e) {
      console.log(e);
      results = [];
    }

    return results.filter((res: Result) => !mode || res.mode === mode)
      .sort((a: Result, b: Result) => b.clicks - a.clicks)
      .map((result: Result, i: number) => ({...result, id: i}));
  }

  addResult(result: Result) {
    let found = false;
    let results = this.getResults(null);
    
    results = results.map(item => {
      if (item.name === result.name && item.mode === result.mode) {
        found = true;
        if (item.clicks < result.clicks) {
          return result;
        }
      }
      return item;
    });

    if (!found) {
      results.push(result);
    }

    localStorage.setItem('results', JSON.stringify(results));
  }
}
