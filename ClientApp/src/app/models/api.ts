export interface ApiPokemon {
  id: number;
  nationalNo: number;
  name: string;
  date: Date;
  isCaught: boolean;
}

export interface Message {
  title: string;
  message: string;
}
