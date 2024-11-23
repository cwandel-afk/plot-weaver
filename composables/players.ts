type Level =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;
type CharacterClass =
  | "barbarian"
  | "bard"
  | "cleric"
  | "druid"
  | "fighter"
  | "monk"
  | "paladin"
  | "ranger"
  | "rogue"
  | "sorcerer"
  | "warlock"
  | "wizard"
  | undefined;

export interface IPlayer {
  name: string;
  in_game_name: string;
  character_klass: CharacterClass;
  armor_class: number;
  hit_points: number;
  current_hit_points: number;
  level: Level;
  spell_slots: number;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  notes: string;
  character_sheet: File | undefined;
}

export class Player implements IPlayer {
  name = "";
  in_game_name = "";
  character_klass: CharacterClass = undefined;
  armor_class = 10;
  hit_points = 0;
  current_hit_points = 0;
  level: Level = 1;
  spell_slots = 0;
  str = 10;
  dex = 10;
  con = 10;
  int = 10;
  wis = 10;
  cha = 10;
  notes = "";
  character_sheet = undefined;

  constructor(init?: Partial<Player>) {
    Object.assign(this, init);
  }

  get modifierStr() {
    return Math.floor((this.str - 10) / 2);
  }

  get modifierDex() {
    return Math.floor((this.dex - 10) / 2);
  }

  get modifierCon() {
    return Math.floor((this.con - 10) / 2);
  }

  get modifierInt() {
    return Math.floor((this.int - 10) / 2);
  }

  get modifierWis() {
    return Math.floor((this.wis - 10) / 2);
  }

  get modifierCha() {
    return Math.floor((this.cha - 10) / 2);
  }

  get proficiencyBonus() {
    return Math.ceil(this.level / 4) + 1;
  }

  get initiative() {
    return this.modifierDex;
  }

  useSpellSlot() {
    this.spell_slots--;
  }

  rest(health: number) {
    this.current_hit_points = Math.min(
      this.hit_points,
      this.current_hit_points + health
    );
    this.spell_slots = Math.min(this.level, this.spell_slots + 1);
  }
}

export const usePlayers = () => {
  const players = useState<Player[]>("players", () => []);

  const addPlayer = (player: Player) => {
    players.value.push(player);
  };

  const updatePlayer = (index: number, updatedPlayer: Partial<Player>) => {
    Object.assign(players.value[index], updatedPlayer);
  };

  const deletePlayer = (index: number) => {
    players.value.splice(index, 1);
  };

  return {
    players,
    addPlayer,
    updatePlayer,
    deletePlayer,
  };
};
