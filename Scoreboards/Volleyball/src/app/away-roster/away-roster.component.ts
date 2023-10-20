import { Component } from '@angular/core';
import { RosterService } from '../roster.service';
import { Team } from '../team.model';

@Component({
  selector: 'app-away-roster',
  templateUrl: './away-roster.component.html',
  styleUrls: ['./away-roster.component.css'],
})
export class AwayRosterComponent {
  constructor(public rosterService: RosterService) {}

  teamData: Team[];
  awayTeam: Team;

  ngOnInit() {
    // read team data from the service
    this.rosterService.getTeamData().subscribe((data) => {
      // console.log('data: ', data);
      this.teamData = data;
      this.awayTeam = this.teamData[1]; // Assuming data for Home Team is the first object
      // console.log(this.awayTeam);
    });
  }

  onPlayerClick(player: any) {
    // Implement the desired behavior when a player is clicked
    console.log(`Player ${player.name} was clicked.`);
    // Add your logic here, e.g., to display more information about the player.
  }
}
