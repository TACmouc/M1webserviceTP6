const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Exemple de données pour la démo
const gamesData = [
  {
    id: '1',
    name: 'Game 1',
    genres: ['Action', 'Adventure'],
    publicationDate: 1637427600, // Exemple de timestamp pour la date
    editors: [],
    studios: [],
    platform: ['PC', 'PS4'],
  },
  // Ajoutez d'autres jeux, éditeurs et studios selon vos besoins
];

const editorsData = [
  {
    id: '1',
    name: 'Editor 1',
    games: [],
  },
  // Ajoutez d'autres éditeurs
];

const studiosData = [
  {
    id: '1',
    name: 'Studio 1',
    games: [],
  },
  // Ajoutez d'autres studios
];

// Construction du schéma GraphQL
const schema = buildSchema(`
  type Query {
    games(page: Int, genre: String, platform: String, studio: String): Games
    game(id: ID!): Game
    editors: [Editor]
    editor(id: ID!): Editor
    studios: [Studio]
    studio(id: ID!): Studio
  }

  type Game {
    id: ID
    name: String!
    genres: [String!]!
    publicationDate: Int
    editors: [Editor!]!
    studios: [Studio!]!
    platform: [String!]!
  }

  type Editor {
    id: ID
    name: String!
    games: [Game]
  }

  type Studio {
    id: ID
    name: String!
    games: [Game]
  }

  type Games {
    infos: Infos
    results: [Game]
  }

  type Infos {
    # Ajoutez les champs d'information nécessaires ici
    total: Int
  }
`);

// Définition des résolveurs
const root = {
  games: (args) => {
    // Logique de récupération des jeux en fonction des arguments
    // Pour la démo, renvoyez simplement tous les jeux
    return {
      infos: null, // Ajoutez les informations nécessaires ici
      results: gamesData,
    };
  },
  game: ({ id }) => {
    // Logique de récupération du jeu par ID
    return gamesData.find((game) => game.id === id);
  },
  editors: () => editorsData,
  editor: ({ id }) => editorsData.find((editor) => editor.id === id),
  studios: () => studiosData,
  studio: ({ id }) => studiosData.find((studio) => studio.id === id),
};

// Configuration du serveur Express
const app = express();

// Configuration de la route GraphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Permet d'utiliser l'interface graphique GraphQL
  })
);

// Démarrage du serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/graphql`);
});
