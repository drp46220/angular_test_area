import { Component } from '@angular/core';
import { RosterService } from '../roster.service';
import { Score, Team } from '../team.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  teamData: Team[];
  teamA: Team;
  teamB: Team;

  homeScore: number = 0;
  awayScore: number = 0;

  teamServing: string[] = ['    ', '<---', '--->'];
  serves;

  setResults: { home: number; away: number }[] = [];
  homeSetWins: number = 0;
  awaySetWins: number = 0;

  isGame3 = false;
  setCount = 1;

  constructor(public rosterService: RosterService, public router: Router) {}

  ngOnInit() {
    // read team data from the service
    this.rosterService.getTeamData().subscribe((data) => {
      // console.log('data: ', data);
      this.teamData = data;
      this.teamA = this.teamData[0]; // Assuming data for Team A is the first object
      this.teamB = this.teamData[1]; // Assuming data for Team B is the second object
    });
  }

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

  recordSetResult() {
    this.setResults.push({
      home: this.homeScore,
      away: this.awayScore,
    });

    console.log('setResults length:', this.setResults);

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

  RosterView() {
    this.router.navigate(['']);
  }
}
