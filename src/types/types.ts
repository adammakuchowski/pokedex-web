export interface PokemonData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface ThemeColor {
  theme: boolean,
  backgroundColor: string,
  pokedexBackgroundColor: string
}
