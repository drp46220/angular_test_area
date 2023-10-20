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
}

export class Stats {
  kills: number;
  blocks: number;
  digs: number;

  constructor() {
    (this.kills = 0), (this.blocks = 0), (this.digs = 0);
  }

  kill() {
    this.kills++;
  }
  getKills() {
    return this.kills;
  }
  block() {
    this.blocks++;
  }
  getBlocks() {
    return this.blocks;
  }
  dig() {
    this.digs++;
  }
  getDigs() {
    return this.digs;
  }
}
