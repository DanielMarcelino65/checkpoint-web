export interface RawgApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
  user_platforms?: boolean;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  user_game?: null;
  score?: number | null;
  added_by_status: AddedByStatus;
  metacritic?: number | null;
  playtime: number;
  suggestions_count: number;
  updated: string;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: PlatformItem[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  stores: StoreItem[] | null;
  clip: null;
  tags: Tag[];
  esrb_rating: EsrbRating | null;
  short_screenshots: ShortScreenshot[];
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing?: number;
}

export interface PlatformItem {
  platform: PlatformDetail;
  released_at?: string;
  requirements_en?: Requirements | null;
  requirements_ru?: Requirements | null;
}

export interface PlatformDetail {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
  year_end?: number | null;
  year_start?: number | null;
  games_count?: number;
  image_background?: string;
}

export interface Requirements {
  minimum: string;
  recommended: string;
}

export interface ParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count?: number;
  image_background?: string;
}

export interface StoreItem {
  id?: number;
  store: StoreDetail;
}

export interface StoreDetail {
  id: number;
  name: string;
  slug: string;
  domain?: string;
  games_count?: number;
  image_background?: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
  name_en?: string;
  name_ru?: string;
}

export interface ShortScreenshot {
  id: number;
  image: string;
}
