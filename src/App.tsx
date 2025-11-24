import { useState, useEffect } from 'react'
import type { Card, SearchFilters } from './types/yugioh'
import { searchCards, getRandomCard } from './services/api'
import Home from './components/Home'
import SearchBar from './components/SearchBar'
import CardList from './components/CardList'
import CardDetail from './components/CardDetail'
import './App.css'

function App() {
  const [showHome, setShowHome] = useState(true)
  const [cards, setCards] = useState<Card[]>([])
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Carregar cartas iniciais quando entrar no explorer
  useEffect(() => {
    if (!showHome) {
      loadInitialCards()
    }
  }, [showHome])

  const loadInitialCards = async () => {
    setLoading(true)
    setError(null)
    try {
      // Buscar algumas cartas populares como inicial
      const result = await searchCards({ fname: 'Dragon', sort: 'name' })
      setCards(result.slice(0, 20)) // Limitar a 20 cartas inicialmente
    } catch (err) {
      setError('Erro ao carregar cartas iniciais')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (filters: SearchFilters) => {
    setLoading(true)
    setError(null)
    try {
      // Se não houver filtros, buscar cartas aleatórias
      if (Object.keys(filters).length === 0) {
        await loadInitialCards()
        return
      }

      const result = await searchCards(filters)
      setCards(result.slice(0, 50)) // Limitar a 50 cartas para melhor performance
      
      if (result.length === 0) {
        setError('Nenhuma carta encontrada com esses filtros')
      }
    } catch (err) {
      setError('Erro ao buscar cartas. Tente novamente.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleRandomCard = async () => {
    setLoading(true)
    setError(null)
    try {
      const card = await getRandomCard()
      if (card) {
        setSelectedCard(card)
      }
    } catch (err) {
      setError('Erro ao buscar carta aleatória')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (showHome) {
    return <Home onEnter={() => setShowHome(false)} />
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-top">
            <button onClick={() => setShowHome(true)} className="back-button" title="Voltar">
              ← Início
            </button>
            <h1 className="app-title">
              <span className="title-icon">🎴</span>
              Yu-Gi-Oh! Explorer
            </h1>
            <button onClick={handleRandomCard} className="random-button" disabled={loading}>
              🎲 Carta Aleatória
            </button>
          </div>
          <p className="app-subtitle">
            Explore o universo de cartas Yu-Gi-Oh! com dados da API YGOProdeck
          </p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <SearchBar onSearch={handleSearch} loading={loading} />
          
          {error && (
            <div className="error-message">
              <span>⚠️</span> {error}
            </div>
          )}

          <div className="results-info">
            {!loading && cards.length > 0 && (
              <p>{cards.length} carta{cards.length !== 1 ? 's' : ''} encontrada{cards.length !== 1 ? 's' : ''}</p>
            )}
          </div>

          <CardList
            cards={cards}
            loading={loading}
            onCardClick={setSelectedCard}
          />
        </div>
      </main>

      <CardDetail
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
      />

      <footer className="app-footer">
        <p>
          Desenvolvido com ❤️ usando a{' '}
          <a
            href="https://ygoprodeck.com/api-guide/"
            target="_blank"
            rel="noopener noreferrer"
          >
            API YGOProdeck
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
