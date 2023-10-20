import { Injectable } from '@angular/core';
import { Player, Team } from './team.model';

@Injectable({
  providedIn: 'root',
})
export class StatService {
  teamData: Team[];
  teamA: Team;
  teamB: Team;

  homePlayerList: Player[];
  awayPlayerList: Player[];

  homeScore: number = 0;
  awayScore: number = 0;

  teamServing: string[] = ['       ', '<      ', '     >'];
  serves;

  setResults: { home: number; away: number }[] = [
    { home: null, away: null },
    { home: null, away: null },
    { home: null, away: null },
  ];

  homeSetWins: number = 0;
  awaySetWins: number = 0;

  isGame3 = false;
  setCount = 1;

  players: Player[];

  incrementHomeScore() {
    this.homeScore++;
    this.serves = this.teamServing[1];
    if (this.isGame3) {
      // Check for the win condition in game 3 (15 points, win by 2)
      if (this.homeScore >= 15 && this.homeScore - this.awayScore >= 2) {
        this.recordSetResult();
      }
    } else {
      // Check for the standard win condition (25 points, win by 2)
      if (this.homeScore >= 25 && this.homeScore - this.awayScore >= 2) {
        this.recordSetResult();
        this.resetBoard();
      }
    }
  }

  incrementAwayScore() {
    this.awayScore++;
    this.serves = this.teamServing[2];
    if (this.isGame3) {
      // Check for the win condition in game 3 (15 points, win by 2)
      if (this.awayScore >= 15 && this.awayScore - this.homeScore >= 2) {
        this.recordSetResult();
      }
    } else {
      // Check for the standard win condition (25 points, win by 2)
      if (this.awayScore >= 25 && this.awayScore - this.homeScore >= 2) {
        this.recordSetResult();
        this.resetBoard();
      }
    }
  }

  resetBoard() {
    this.homeScore = 0;
    this.awayScore = 0;
    this.serves = this.teamServing[0];
  }

  SetResult(setNumber: number) {
    this.setResults[setNumber - 1] = {
      home: this.homeScore,
      away: this.awayScore,
    };

    console.log('set results', this.setResults);
  }

  recordSetResult() {
    this.SetResult(this.setCount);

    // console.log('setResults length:', this.setResults);

    this.setResults[this.setCount - 1].home >
    this.setResults[this.setCount - 1].away
      ? this.homeSetWins++
      : this.awaySetWins++;

    // console.log(this.setCount);
    // console.log(this.homeSetWins, this.awaySetWins);

    // console.log(this.homeSetWins == this.awaySetWins && this.setCount == 2);
    if (this.homeSetWins == this.awaySetWins && this.setCount == 2) {
      this.isGame3 = true;
    }

    this.setCount++;
  }

  getHomeScore() {
    return this.homeScore;
  }

  getAwayScore() {
    return this.awayScore;
  }

  getServes() {
    return this.serves;
  }

  getSetResults(set: number) {
    return this.setResults[set];
  }

  getSetCount() {
    return this.setCount;
  }
}
