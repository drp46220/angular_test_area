import { Component } from '@angular/core';
import { RosterService } from '../roster.service';
import { Team } from '../team.model';

@Component({
  selector: 'app-home-roster',
  templateUrl: './home-roster.component.html',
  styleUrls: ['./home-roster.component.css'],
})
export class HomeRosterComponent {
  constructor(public rosterService: RosterService) {}

  teamData: Team[];
  homeTeam: Team;

  ngOnInit() {
    // read team data from the service
    this.rosterService.getTeamData().subscribe((data) => {
      // console.log('data: ', data);
      this.teamData = data;
      this.homeTeam = this.teamData[0]; // Assuming data for Home Team is the first object
      // console.log(this.homeTeam);
    });
  }

  onPlayerClick(player: any) {
    // Implement the desired behavior when a player is clicked
    console.log(`Player ${player.name} was clicked.`);
    // Add your logic here, e.g., to display more information about the player.
  }
}
