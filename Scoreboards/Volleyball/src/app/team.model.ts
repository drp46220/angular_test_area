// team.model.ts

// Team Class
export class Team {
  teamName: string;
  coach: Coach;
  players: Player[];
}

export class Score {
  team1: number;
  team2: number;
}

// Coach Class
export class Coach {
  name: string;
  age: number;
}

// Player Class
export class Player {
  name: string;
  age: number;
  height: string;
  position: string;
  number: number;
  stats: Stats;

  constructor(
    name: string,
    age: number,
    height: string,
    position: string,
    number: number,
    stats: Stats
  ) {
    (this.name = name),
      (this.age = age),
      (this.height = height),
      (this.position = position),
      (this.number = number);
    this.stats = stats;
  }
}

export class Stats {
  kills: number = 0;
  attacks: number = 0;
  assists: number = 0;
  blocks: number = 0;
  digs: number = 0;

  constructor(
    kills: number,
    attacks: number,
    assists: number,
    blocks: number,
    digs: number
  ) {
    (this.kills = kills),
      (this.attacks = attacks),
      (this.assists = assists),
      (this.blocks = blocks),
      (this.digs = digs);
  }
}
