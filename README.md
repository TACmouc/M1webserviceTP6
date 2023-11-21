# M1webserviceTP6
# GraphQL API pour les Jeux Vidéo

Ce projet met en place une API GraphQL permettant de récupérer des informations sur les jeux vidéo, les éditeurs et les studios associés. L'API est construite avec Node.js, Express, et Express-GraphQL.

## Installation

1. Assurez-vous d'avoir Node.js installé sur votre machine.
2. Clonez ce dépôt avec la commande suivante:

    ```bash
    git clone https://github.com/votre-utilisateur/votre-repo.git
    ```

3. Accédez au répertoire du projet:

    ```bash
    cd votre-repo
    ```

4. Installez les dépendances:

    ```bash
    npm install
    ```

## Configuration

Le projet utilise les données de démo pour les jeux, les éditeurs et les studios. Vous pouvez ajouter ou modifier ces données dans le fichier `index.js` selon vos besoins.

## Utilisation

1. Démarrez le serveur avec la commande:

    ```bash
    npm start
    ```

2. Ouvrez votre navigateur et accédez à [http://localhost:3000/graphql](http://localhost:3000/graphql) pour utiliser l'interface graphique GraphQL (GraphiQL).

3. Utilisez les requêtes GraphQL pour récupérer des informations sur les jeux, les éditeurs et les studios.

## Exemples de Requêtes GraphQL

### Récupérer tous les jeux

```graphql
query {
  games {
    results {
      id
      name
      genres
      publicationDate
      editors {
        id
        name
      }
      studios {
        id
        name
      }
      platform
    }
  }
}
