# Yu-Gi-Oh! Explorer 🎴

Aplicação web para explorar e buscar cartas do Yu-Gi-Oh! usando a API do YGOProdeck.

## 🚀 Funcionalidades

- 🔍 **Busca de Cartas**: Busque cartas por nome usando busca fuzzy
- 🎯 **Filtros Avançados**: Filtre por tipo, atributo e raça das cartas
- 🎲 **Carta Aleatória**: Descubra cartas aleatórias com um clique
- 📱 **Design Responsivo**: Interface adaptada para desktop e mobile
- 🎨 **Interface Moderna**: Design escuro com gradientes e animações suaves
- 📊 **Detalhes Completos**: Visualize informações detalhadas, preços, sets e banlist status

## 🛠️ Tecnologias

- **React 19** - Biblioteca para construção da UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **YGOProdeck API** - Fonte dos dados das cartas
- **CSS3** - Estilização com gradientes e animações

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

## 🎮 Como Usar

1. **Buscar Cartas**: Digite o nome da carta no campo de busca
2. **Aplicar Filtros**: Selecione tipo, atributo ou raça nos dropdowns
3. **Ver Detalhes**: Clique em qualquer carta para ver informações completas
4. **Carta Aleatória**: Use o botão "Carta Aleatória" no topo da página
5. **Limpar Filtros**: Clique em "Limpar" para resetar a busca

## 📚 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── CardList.tsx    # Grid de cartas
│   ├── SearchBar.tsx   # Barra de busca e filtros
│   └── CardDetail.tsx  # Modal de detalhes
├── services/           # Serviços e APIs
│   └── api.ts         # Integração com YGOProdeck API
├── types/             # Definições TypeScript
│   └── yugioh.ts      # Tipos das cartas e API
├── App.tsx            # Componente principal
└── main.tsx          # Entry point
```

## 🌐 API

Este projeto usa a [YGOProdeck API](https://ygoprodeck.com/api-guide/) que fornece:
- Informações completas de cartas
- Preços de múltiplos vendedores
- Status de banlist
- Imagens em alta qualidade
- Dados de sets e raridades

## 📝 Licença

MIT

## 🙏 Créditos

- Dados fornecidos por [YGOProdeck](https://ygoprodeck.com/)
- Yu-Gi-Oh! é propriedade da Konami
