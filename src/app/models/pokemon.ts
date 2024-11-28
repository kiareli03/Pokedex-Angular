export interface PokemonQueryResults {
  results: { 
    name: string; 
    url: string; 
  }[]
}

export interface Pokemon {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
    }
  }[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      }
    }
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }[];
}

export interface PokemonSpecies {
  names: {
    name: string;
  }[];
}