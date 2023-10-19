import { Component } from '@angular/core';
import { RosterService } from '../roster.service';
import { Team } from '../team.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  constructor(public rosterService: RosterService, public router: Router) {}

  teamData: Team[]; // Store the entire JSON data
  teamA: Team;
  teamB: Team;

  ngOnInit() {
    // read team data from the service
    this.rosterService.getTeamData().subscribe((data) => {
      // console.log('data: ', data);
      this.teamData = data;
      this.teamA = this.teamData[0]; // Assuming data for Team A is the first object
      this.teamB = this.teamData[1]; // Assuming data for Team B is the second object
    });
  }

  Game_Start() {
    this.router.navigate(['/board']);
  }
}
