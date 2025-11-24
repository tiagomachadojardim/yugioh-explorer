import type { Card } from '../types/yugioh';
import './CardDetail.css';

interface CardDetailProps {
  card: Card | null;
  onClose: () => void;
}

function CardDetail({ card, onClose }: CardDetailProps) {
  if (!card) return null;

  const formatPrice = (price?: string) => {
    if (!price || price === '0.00') return 'N/A';
    return `$${price}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <div className="card-detail">
          <div className="card-detail-image">
            <img
              src={card.card_images[0].image_url}
              alt={card.name}
              className="detail-image"
            />
          </div>

          <div className="card-detail-info">
            <h2 className="detail-title">{card.name}</h2>
            
            <div className="detail-section">
              <div className="detail-row">
                <span className="detail-label">Tipo:</span>
                <span className="detail-value">{card.type}</span>
              </div>
              
              <div className="detail-row">
                <span className="detail-label">Frame:</span>
                <span className="detail-value">{card.frameType}</span>
              </div>

              {card.race && (
                <div className="detail-row">
                  <span className="detail-label">Raça:</span>
                  <span className="detail-value">{card.race}</span>
                </div>
              )}

              {card.attribute && (
                <div className="detail-row">
                  <span className="detail-label">Atributo:</span>
                  <span className="detail-value">{card.attribute}</span>
                </div>
              )}

              {card.level !== undefined && (
                <div className="detail-row">
                  <span className="detail-label">Level:</span>
                  <span className="detail-value">{card.level}</span>
                </div>
              )}

              {card.atk !== undefined && (
                <div className="detail-row">
                  <span className="detail-label">ATK:</span>
                  <span className="detail-value">{card.atk}</span>
                </div>
              )}

              {card.def !== undefined && (
                <div className="detail-row">
                  <span className="detail-label">DEF:</span>
                  <span className="detail-value">{card.def}</span>
                </div>
              )}

              {card.linkval !== undefined && (
                <div className="detail-row">
                  <span className="detail-label">Link Value:</span>
                  <span className="detail-value">{card.linkval}</span>
                </div>
              )}

              {card.linkmarkers && card.linkmarkers.length > 0 && (
                <div className="detail-row">
                  <span className="detail-label">Link Markers:</span>
                  <span className="detail-value">{card.linkmarkers.join(', ')}</span>
                </div>
              )}

              {card.scale !== undefined && (
                <div className="detail-row">
                  <span className="detail-label">Pendulum Scale:</span>
                  <span className="detail-value">{card.scale}</span>
                </div>
              )}

              {card.archetype && (
                <div className="detail-row">
                  <span className="detail-label">Arquétipo:</span>
                  <span className="detail-value">{card.archetype}</span>
                </div>
              )}
            </div>

            <div className="detail-section">
              <h3 className="section-title">Descrição</h3>
              <p className="card-description">{card.desc}</p>
            </div>

            {card.card_prices && card.card_prices.length > 0 && (
              <div className="detail-section">
                <h3 className="section-title">Preços</h3>
                <div className="prices-grid">
                  <div className="price-item">
                    <span className="price-label">TCGPlayer:</span>
                    <span className="price-value">{formatPrice(card.card_prices[0].tcgplayer_price)}</span>
                  </div>
                  <div className="price-item">
                    <span className="price-label">Cardmarket:</span>
                    <span className="price-value">{formatPrice(card.card_prices[0].cardmarket_price)}</span>
                  </div>
                  <div className="price-item">
                    <span className="price-label">eBay:</span>
                    <span className="price-value">{formatPrice(card.card_prices[0].ebay_price)}</span>
                  </div>
                  <div className="price-item">
                    <span className="price-label">Amazon:</span>
                    <span className="price-value">{formatPrice(card.card_prices[0].amazon_price)}</span>
                  </div>
                </div>
              </div>
            )}

            {card.banlist_info && (
              <div className="detail-section">
                <h3 className="section-title">Banlist Status</h3>
                <div className="banlist-grid">
                  {card.banlist_info.ban_tcg && (
                    <div className="banlist-item">
                      <span className="banlist-label">TCG:</span>
                      <span className={`banlist-value ${card.banlist_info.ban_tcg.toLowerCase()}`}>
                        {card.banlist_info.ban_tcg}
                      </span>
                    </div>
                  )}
                  {card.banlist_info.ban_ocg && (
                    <div className="banlist-item">
                      <span className="banlist-label">OCG:</span>
                      <span className={`banlist-value ${card.banlist_info.ban_ocg.toLowerCase()}`}>
                        {card.banlist_info.ban_ocg}
                      </span>
                    </div>
                  )}
                  {card.banlist_info.ban_goat && (
                    <div className="banlist-item">
                      <span className="banlist-label">Goat:</span>
                      <span className={`banlist-value ${card.banlist_info.ban_goat.toLowerCase()}`}>
                        {card.banlist_info.ban_goat}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {card.card_sets && card.card_sets.length > 0 && (
              <div className="detail-section">
                <h3 className="section-title">Sets ({card.card_sets.length})</h3>
                <div className="sets-list">
                  {card.card_sets.slice(0, 5).map((set, index) => (
                    <div key={index} className="set-item">
                      <span className="set-name">{set.set_name}</span>
                      <span className="set-code">{set.set_code}</span>
                      <span className="set-rarity">{set.set_rarity}</span>
                    </div>
                  ))}
                  {card.card_sets.length > 5 && (
                    <p className="sets-more">E mais {card.card_sets.length - 5} sets...</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
