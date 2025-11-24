import { useState } from 'react';
import './Home.css';
import wallpaper1 from '../assets/wallpaperflare.com_wallpaper.jpg';
import wallpaper2 from '../assets/wallpaperflare.com_wallpaper (1).jpg';

interface HomeProps {
  onEnter: () => void;
}

function Home({ onEnter }: HomeProps) {
  const [currentBg, setCurrentBg] = useState(0);

  return (
    <div className="home-container">
      <div 
        className={`home-background bg-1 ${currentBg === 0 ? 'active' : ''}`}
        style={{ backgroundImage: `url(${wallpaper1})` }}
      />
      <div 
        className={`home-background bg-2 ${currentBg === 1 ? 'active' : ''}`}
        style={{ backgroundImage: `url(${wallpaper2})` }}
      />
      
      <div className="home-overlay" />
      
      <div className="home-content">
        <div className="home-logo">
          <span className="logo-icon">🎴</span>
          <h1 className="home-title">Yu-Gi-Oh!</h1>
          <h2 className="home-subtitle">Card Explorer</h2>
        </div>
        
        <p className="home-description">
          Explore o vasto universo de cartas Yu-Gi-Oh! com informações detalhadas,
          preços atualizados e muito mais.
        </p>
        
        <div className="home-features">
          <div className="feature-item">
            <span className="feature-icon">🔍</span>
            <span>Busca Avançada</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💰</span>
            <span>Preços Atualizados</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📊</span>
            <span>Detalhes Completos</span>
          </div>
        </div>
        
        <button className="enter-button" onClick={onEnter}>
          <span>Explorar Cartas</span>
          <span className="button-arrow">→</span>
        </button>
        
        <div className="bg-toggle">
          <button 
            className={`toggle-btn ${currentBg === 0 ? 'active' : ''}`}
            onClick={() => setCurrentBg(0)}
            aria-label="Wallpaper 1"
          />
          <button 
            className={`toggle-btn ${currentBg === 1 ? 'active' : ''}`}
            onClick={() => setCurrentBg(1)}
            aria-label="Wallpaper 2"
          />
        </div>
      </div>
      
      <div className="home-footer">
        <p>
          Powered by{' '}
          <a
            href="https://ygoprodeck.com/api-guide/"
            target="_blank"
            rel="noopener noreferrer"
          >
            YGOProdeck API
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
