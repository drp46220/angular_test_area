import { Component } from '@angular/core';
import { RosterService } from '../roster.service';
import { Player, Stats, Team } from '../team.model';
import { StatService } from '../stats.service';

@Component({
  selector: 'app-home-roster',
  templateUrl: './home-roster.component.html',
  styleUrls: ['./home-roster.component.css'],
})
export class HomeRosterComponent {
  constructor(
    public rosterService: RosterService,
    public statService: StatService
  ) {}

  teamData: Team[];
  homeTeam: Team;
  playersList: Player[];

  ngOnInit() {
    // read team data from the service
    this.rosterService.getTeamData().subscribe((data) => {
      this.teamData = data;
      this.homeTeam = this.teamData[0]; // Assuming data for Home Team is the first object

      // Loop through the players in homeTeam and create new Player instances
      this.homeTeam.players.forEach((playerData) => {
        const player = new Player();
        player.name = playerData.name;
        player.age = playerData.age;
        player.height = playerData.height;
        player.position = playerData.position;
        player.number = playerData.number;
        player.stats = new Stats();

        // Push the new Player instance into the playersList
        this.playersList.push(player);
      });

      this.statService.homePlayerList = this.playersList;
      console.log('playerlist', this.playersList);
    });
  }

  onPlayerClick(player: any) {
    // Implement the stat behavior when a player is clicked
    console.log(`Player ${player.name} was clicked.`);
    this.statService.incrementHomeScore();
  }
}
