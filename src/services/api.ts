import type { ApiResponse, Card, CardSetInfo, Archetype, SearchFilters } from '../types/yugioh';

const BASE_URL = 'https://db.ygoprodeck.com/api/v7';

/**
 * Busca informações de cartas com base em filtros
 */
export async function searchCards(filters?: SearchFilters): Promise<Card[]> {
  try {
    const params = new URLSearchParams();
    
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== '') {
          params.append(key, value.toString());
        }
      });
    }
    
    const url = `${BASE_URL}/cardinfo.php${params.toString() ? `?${params.toString()}` : ''}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }
    
    const data: ApiResponse = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Erro ao buscar cartas:', error);
    throw error;
  }
}

/**
 * Busca uma carta específica pelo nome exato
 */
export async function getCardByName(name: string): Promise<Card | null> {
  try {
    const cards = await searchCards({ name });
    return cards.length > 0 ? cards[0] : null;
  } catch (error) {
    console.error('Erro ao buscar carta por nome:', error);
    return null;
  }
}

/**
 * Busca uma carta específica pelo ID
 */
export async function getCardById(id: number): Promise<Card | null> {
  try {
    const response = await fetch(`${BASE_URL}/cardinfo.php?id=${id}`);
    
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }
    
    const data: ApiResponse = await response.json();
    return data.data && data.data.length > 0 ? data.data[0] : null;
  } catch (error) {
    console.error('Erro ao buscar carta por ID:', error);
    return null;
  }
}

/**
 * Busca uma carta aleatória
 */
export async function getRandomCard(): Promise<Card | null> {
  try {
    const response = await fetch(`${BASE_URL}/randomcard.php`);
    
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }
    
    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error('Erro ao buscar carta aleatória:', error);
    return null;
  }
}

/**
 * Busca todos os sets de cartas
 */
export async function getAllCardSets(): Promise<CardSetInfo[]> {
  try {
    const response = await fetch(`${BASE_URL}/cardsets.php`);
    
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }
    
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error('Erro ao buscar sets:', error);
    return [];
  }
}

/**
 * Busca todos os arquétipos
 */
export async function getAllArchetypes(): Promise<Archetype[]> {
  try {
    const response = await fetch(`${BASE_URL}/archetypes.php`);
    
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }
    
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error('Erro ao buscar arquétipos:', error);
    return [];
  }
}

/**
 * Busca cartas por arquétipo
 */
export async function getCardsByArchetype(archetype: string): Promise<Card[]> {
  return searchCards({ archetype });
}

/**
 * Busca cartas por tipo (Monster, Spell, Trap, etc)
 */
export async function getCardsByType(type: string): Promise<Card[]> {
  return searchCards({ type });
}

/**
 * Busca cartas por atributo (DARK, LIGHT, WATER, etc)
 */
export async function getCardsByAttribute(attribute: string): Promise<Card[]> {
  return searchCards({ attribute });
}

/**
 * Busca cartas por raça (Spellcaster, Dragon, Warrior, etc)
 */
export async function getCardsByRace(race: string): Promise<Card[]> {
  return searchCards({ race });
}
