import { Component } from '@angular/core';
import { RosterService } from '../roster.service';
import { Score, Team } from '../team.model';
import { Router } from '@angular/router';
import { StatService } from '../stats.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  teamData: Team[];
  teamA: Team = null;
  teamB: Team = null;

  constructor(
    public rosterService: RosterService,
    public router: Router,
    public statService: StatService
  ) {}

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
    this.statService.incrementHomeScore();
  }

  incrementAwayScore() {
    this.statService.incrementAwayScore();
  }

  RosterView() {
    this.router.navigate(['']);
  }
}
