import { useState } from 'react';
import type { SearchFilters } from '../types/yugioh';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  loading?: boolean;
}

function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [selectedRace, setSelectedRace] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const filters: SearchFilters = {};
    
    if (searchTerm.trim()) {
      filters.fname = searchTerm.trim();
    }
    if (selectedType) {
      filters.type = selectedType;
    }
    if (selectedAttribute) {
      filters.attribute = selectedAttribute;
    }
    if (selectedRace) {
      filters.race = selectedRace;
    }

    onSearch(filters);
  };

  const handleClear = () => {
    setSearchTerm('');
    setSelectedType('');
    setSelectedAttribute('');
    setSelectedRace('');
    onSearch({});
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-row">
          <input
            type="text"
            placeholder="Buscar cartas por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            disabled={loading}
          />
          <button type="submit" className="search-button" disabled={loading}>
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
          <button 
            type="button" 
            onClick={handleClear} 
            className="clear-button"
            disabled={loading}
          >
            Limpar
          </button>
        </div>

        <div className="filters-row">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="filter-select"
            disabled={loading}
          >
            <option value="">Todos os Tipos</option>
            <option value="Effect Monster">Effect Monster</option>
            <option value="Normal Monster">Normal Monster</option>
            <option value="Fusion Monster">Fusion Monster</option>
            <option value="Synchro Monster">Synchro Monster</option>
            <option value="XYZ Monster">XYZ Monster</option>
            <option value="Link Monster">Link Monster</option>
            <option value="Pendulum Effect Monster">Pendulum Effect Monster</option>
            <option value="Ritual Monster">Ritual Monster</option>
            <option value="Spell Card">Spell Card</option>
            <option value="Trap Card">Trap Card</option>
          </select>

          <select
            value={selectedAttribute}
            onChange={(e) => setSelectedAttribute(e.target.value)}
            className="filter-select"
            disabled={loading}
          >
            <option value="">Todos os Atributos</option>
            <option value="DARK">DARK</option>
            <option value="LIGHT">LIGHT</option>
            <option value="EARTH">EARTH</option>
            <option value="WATER">WATER</option>
            <option value="FIRE">FIRE</option>
            <option value="WIND">WIND</option>
            <option value="DIVINE">DIVINE</option>
          </select>

          <select
            value={selectedRace}
            onChange={(e) => setSelectedRace(e.target.value)}
            className="filter-select"
            disabled={loading}
          >
            <option value="">Todas as Raças</option>
            <option value="Spellcaster">Spellcaster</option>
            <option value="Dragon">Dragon</option>
            <option value="Warrior">Warrior</option>
            <option value="Zombie">Zombie</option>
            <option value="Fiend">Fiend</option>
            <option value="Machine">Machine</option>
            <option value="Beast">Beast</option>
            <option value="Beast-Warrior">Beast-Warrior</option>
            <option value="Aqua">Aqua</option>
            <option value="Fairy">Fairy</option>
            <option value="Insect">Insect</option>
            <option value="Dinosaur">Dinosaur</option>
            <option value="Reptile">Reptile</option>
            <option value="Fish">Fish</option>
            <option value="Thunder">Thunder</option>
            <option value="Plant">Plant</option>
            <option value="Rock">Rock</option>
            <option value="Winged Beast">Winged Beast</option>
            <option value="Psychic">Psychic</option>
            <option value="Wyrm">Wyrm</option>
            <option value="Cyberse">Cyberse</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
