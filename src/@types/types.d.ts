export interface FetchPokemonProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: Species[];
}

export interface Species {
  name: string;
  url: string;
}

export interface CharacterProps {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Species[];
  game_indices: GameIndex[];
  held_items: HeldItems[];
  location_area_encounters: string;
  moves: Move[];
  species: Species;
  sprites: Sprites;
  cries: Cries;
  stats: Stat[];
  types: Type[];
  past_types: PastType[];
  past_abilities: [];
}

interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

interface Cries {
  latest: string;
  legacy: string;
}

interface GameIndex {
  game_index: number;
  version: Species;
}

interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
}

interface GenerationV {
  "black-white": Sprites;
}

interface GenerationIv {
  "diamond-pearl": Sprites;
  "heartgold-soulsilver": Sprites;
  platinum: Sprites;
}

interface Versions {
  "generation-i": GenerationI;
  "generation-ii": GenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": GenerationIv;
  "generation-v": GenerationV;
  "generation-vi": { [key: string]: Home };
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
  showdown: Sprites;
}

interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

interface GenerationI {
  "red-blue": RedBlue;
  yellow: RedBlue;
}

interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
}

interface GenerationIii {
  emerald: OfficialArtwork;
  "firered-leafgreen": Gold;
  "ruby-sapphire": Gold;
}

interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

interface GenerationVii {
  icons: DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

interface DreamWorld {
  front_default: string;
  front_female: null;
}

interface GenerationViii {
  icons: DreamWorld;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

interface Type {
  slot: number;
  type: Species;
}

interface HeldItems {
  item: {
    name: string;
    url: string;
  };
  version_details: {
    rarity: number;
    version: HeldItemVersion[];
  };
}

interface HeldItemVersion {
  version: {
    name: string;
    url: string;
  };
}

interface PastType {
  generation: Species;
  types: Type[];
}
