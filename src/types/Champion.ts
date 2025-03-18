export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: Image;
}

export interface ChampionDetail extends Champion {
  lore: string;
  allytips: string[];
  enemytips: string[];
  spells: Spell[];
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  image: Image;
}

export interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
