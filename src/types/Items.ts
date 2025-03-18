export interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  gold: Gold;
}

export interface ItemImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Gold {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}

export type ItemWithId = Item & { id: string };
