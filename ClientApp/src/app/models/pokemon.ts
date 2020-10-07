export enum TYPE_COLOURS {
  bug = "#B1C12E",
  dark = "#4F3A2D",
  dragon = "#755EDF",
  electric = "#F8D030",
  fairy = "#F4B1F4",
  fighting = "#82351D",
  fire = "#E73B0C",
  flying = "#A3B3F7",
  ghost = "#6060B2",
  grass = "#74C236",
  ground = "#D3B357",
  ice = "#A3E7FD",
  normal = "#C8C4BC",
  poison = "#934594",
  psychic = "#ED4882",
  rock = "#B9A156",
  steel = "#B5B5C3",
  water = "#3295F6",
}

export interface PokeAPI {
  count: number;
  next: string;
  results: Results[];
}

export interface Results {
  name: string;
  url: string;
  id?: string;
  details?: Pokemon;
  description?: string;
}

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: Sprites;
  abilities?: Array<any>;
  types?: Types[];
}

export interface Sprites {
  front_default: string;
  other: Images;
  versions: Versions;
}

export interface Images {
  "official-artwork": FrontDefault;
}

export interface Versions {
  "generation-vii": Game;
}

export interface Game {
  ["ultra-sun-ultra-moon"]: FrontDefault;
}

export interface FrontDefault {
  front_default: string;
}

export interface Types {
  slot: number;
  type: NamedApiResource;
}

export interface Species {
  base_happiness: number;
  name: string;
  id: number;
  genera: Genera[];
  gender_rate: number;
  capture_rate: number;
  is_baby: boolean;
  is_legendary: boolean;
  hatch_counter: number;
  evolution_chain: any;
}

export interface Genera {
  genus: string;
  language: NamedApiResource;
}

export interface EvoChain {
  id: number;
  chain: Chain;
}

export interface Chain {
  is_baby: boolean;
  species: Specie;
  evolves_to?: Chain[];
  evolution_details?: EvoDetails[];
}

export interface Specie {
  pokemon: Pokemon;
  name: string;
  url: string;
}

export interface NamedApiResource {
  name: string;
  url: string;
}

export interface EvoDetails {
  gender: number;
  held_item: NamedApiResource;
  item: NamedApiResource;
  known_move: NamedApiResource;
  known_move_type: NamedApiResource;
  location: NamedApiResource;
  trigger: NamedApiResource;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: NamedApiResource;
  party_type: NamedApiResource;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: NamedApiResource;
  turn_upside_down: boolean;
}
