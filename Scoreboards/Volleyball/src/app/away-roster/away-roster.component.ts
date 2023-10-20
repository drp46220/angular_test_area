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
        const player = new Player(
          playerData.name,
          playerData.age,
          playerData.height,
          playerData.position,
          playerData.number,
          new Stats(0, 0, 0, 0, 0)
        );

        // Push the new Player instance into the playersList
        this.playersList.push(player);
      });
      this.statService.homePlayerList = this.playersList;
      console.log('playerlist', this.playersList);
    });
  }

  emptyStats(player: Player) {
    if (!player.stats) {
      player.stats = { kills: 0, attacks: 0, assists: 0, blocks: 0, digs: 0 };
    }
  }

  playerKill(player: Player) {
    this.emptyStats(player);
    this.statService.incrementAwayScore();
    player.stats.kills++;
    console.log(`${player.name} has ${player.stats.kills} kills`);
  }

  playerAttack(player: Player) {
    this.emptyStats(player);
    player.stats.attacks++;
    console.log(`${player.name} has ${player.stats.attacks} attacks`);
  }

  playerAssist(player: Player) {
    this.emptyStats(player);
    player.stats.assists++;
    console.log(`${player.name} has ${player.stats.assists} assists`);
  }

  playerBlock(player: Player) {
    this.emptyStats(player);
    player.stats.blocks++;
    console.log(`${player.name} has ${player.stats.blocks} blocks`);
  }

  playerDig(player: Player) {
    this.emptyStats(player);
    player.stats.digs++;
    console.log(`${player.name} has ${player.stats.digs} digs`);
  }
}
