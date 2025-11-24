// Tipos baseados na API do YGOProdeck
// https://ygoprodeck.com/api-guide/

export interface CardImage {
  id: number;
  image_url: string;
  image_url_small: string;
  image_url_cropped: string;
}

export interface CardSet {
  set_name: string;
  set_code: string;
  set_rarity: string;
  set_rarity_code: string;
  set_price: string;
}

export interface CardPrice {
  cardmarket_price: string;
  tcgplayer_price: string;
  ebay_price: string;
  amazon_price: string;
  coolstuffinc_price: string;
}

export interface BanlistInfo {
  ban_tcg?: string;
  ban_ocg?: string;
  ban_goat?: string;
}

export interface MiscInfo {
  beta_name?: string;
  views?: number;
  viewsweek?: number;
  upvotes?: number;
  downvotes?: number;
  formats?: string[];
  treated_as?: string;
  tcg_date?: string;
  ocg_date?: string;
  konami_id?: number;
  md_rarity?: string;
  has_effect?: number;
}

export interface Card {
  id: number;
  name: string;
  type: string;
  frameType: string;
  desc: string;
  race: string;
  archetype?: string;
  ygoprodeck_url?: string;
  
  // Monster card specific fields
  atk?: number;
  def?: number;
  level?: number;
  attribute?: string;
  
  // Link monster specific
  linkval?: number;
  linkmarkers?: string[];
  
  // Pendulum specific
  scale?: number;
  
  // Arrays
  card_sets?: CardSet[];
  card_images: CardImage[];
  card_prices?: CardPrice[];
  banlist_info?: BanlistInfo;
  misc_info?: MiscInfo;
}

export interface ApiResponse {
  data: Card[];
  meta?: {
    current_rows: number;
    total_rows: number;
    rows_remaining: number;
    total_pages: number;
    pages_remaining: number;
    next_page?: string;
    next_page_offset?: number;
  };
}

export interface CardSetInfo {
  set_name: string;
  set_code: string;
  num_of_cards: number;
  tcg_date: string;
}

export interface Archetype {
  archetype_name: string;
}

export interface SearchFilters {
  name?: string;
  fname?: string;
  type?: string;
  atk?: string;
  def?: string;
  level?: string;
  race?: string;
  attribute?: string;
  archetype?: string;
  banlist?: string;
  sort?: 'atk' | 'def' | 'name' | 'type' | 'level' | 'id' | 'new';
  format?: 'tcg' | 'goat' | 'ocg goat' | 'speed duel' | 'master duel' | 'rush duel' | 'duel links';
}
