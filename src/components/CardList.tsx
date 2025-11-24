import type { Card } from '../types/yugioh';
import './CardList.css';

interface CardListProps {
  cards: Card[];
  loading?: boolean;
  onCardClick?: (card: Card) => void;
}

function CardList({ cards, loading, onCardClick }: CardListProps) {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Carregando cartas...</p>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="empty-state">
        <p>Nenhuma carta encontrada. Tente outra busca!</p>
      </div>
    );
  }

  return (
    <div className="card-list">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card-item"
          onClick={() => onCardClick?.(card)}
        >
          <div className="card-image-container">
            <img
              src={card.card_images[0].image_url_small}
              alt={card.name}
              className="card-image"
              loading="lazy"
            />
          </div>
          <div className="card-info">
            <h3 className="card-name">{card.name}</h3>
            <p className="card-type">{card.type}</p>
            {card.atk !== undefined && (
              <div className="card-stats">
                <span>ATK: {card.atk}</span>
                {card.def !== undefined && <span> / DEF: {card.def}</span>}
              </div>
            )}
            {card.level !== undefined && (
              <p className="card-level">Level: {card.level}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
