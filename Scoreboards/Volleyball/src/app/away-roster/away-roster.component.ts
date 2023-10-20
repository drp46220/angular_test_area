import { Component } from '@angular/core';
import { RosterService } from '../roster.service';
import { Player, Stats, Team } from '../team.model';
import { StatService } from '../stats.service';

@Component({
  selector: 'app-away-roster',
  templateUrl: './away-roster.component.html',
  styleUrls: ['./away-roster.component.css'],
})
export class AwayRosterComponent {
  constructor(
    public rosterService: RosterService,
    public statService: StatService
  ) {}

  teamData: Team[];
  awayTeam: Team;
  playersList: Player[];

  ngOnInit() {
    // read team data from the service
    this.rosterService.getTeamData().subscribe((data) => {
      // console.log('data: ', data);
      this.teamData = data;
      this.awayTeam = this.teamData[1]; // Assuming data for Home Team is the first object
      // console.log(this.awayTeam);

      // Loop through the players in homeTeam and create new Player instances
      this.awayTeam.players.forEach((playerData) => {
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
    this.statService.incrementAwayScore();
    // this.statService.kill(player.name);
  }
}
