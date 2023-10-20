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

  constructor() {
    this.stats = { kills: 0, blocks: 0, digs: 0 }; // Initialize stats object with default values
  }
}

export class Stats {
  kills: number;
  blocks: number;
  digs: number;
}
