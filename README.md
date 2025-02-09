# Technos-Web-TP
# Jeu Canvas

Ce projet est un jeu simple en HTML5/JavaScript basé sur un Canvas. Le joueur contrôle un carré jaune qui se déplace uniquement via les touches directionnelles. Le but est d'éviter les obstacles et d'atteindre la sortie verte située en bas à droite pour passer au niveau suivant. Un carré bleu suit également la souris à l'écran.

---

## Table des matières

- [Structure du projet](#structure-du-projet)
- [Prérequis](#prérequis)
- [Installation et exécution](#installation-et-exécution)
- [Commandes et contrôles](#commandes-et-contrôles)

---

## Structure du projet

Le projet est organisé de la manière suivante :

```
ProjetCanvas/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    ├── utils.js
    ├── collisions.js
    ├── ecouteurs.js
    ├── ObjectGraphique.js
    ├── ObjetSouris.js
    ├── Obstacle.js
    ├── ObstacleAnime.js
    ├── Sortie.js
    ├── Player.js
    ├── Game.js
    └── script.js
```

- **index.html** : Fichier principal qui charge le Canvas et référence les fichiers CSS et JavaScript.
- **css/style.css** : Fichier de style pour le Canvas et l'interface.
- **js/** : Dossier contenant tous les fichiers JavaScript répartis par fonctionnalités (collisions, gestion des événements, classes du jeu, etc.).

---

## Prérequis

- [Node.js](https://nodejs.org) et **npm** doivent être installés sur votre machine.
- **http-server** (ou une extension comme Live Server pour Visual Studio Code) pour lancer un serveur local.

---

## Installation et exécution

### 1. Cloner ou télécharger le projet

- Téléchargez l'archive ou clonez le dépôt dans un dossier sur votre machine.
- Assurez-vous que la structure du projet correspond à celle décrite ci-dessus.

### 2. Installer http-server (si nécessaire)

Ouvrez un terminal et exécutez la commande suivante pour installer **http-server** globalement :

```bash
npm install -g http-server
```

### 3. Lancer le serveur local

Placez-vous dans le dossier racine du projet (là où se trouve index.html) et exécutez :

```bash
http-server -p 8080
```

Le serveur démarrera et affichera une liste d'adresses disponibles, par exemple :

```
Available on:
  http://127.0.0.1:8080
  http://10.164.27.231:8080
```

### 4. Ouvrir le jeu dans le navigateur

Ouvrez votre navigateur et accédez à l'URL suivante :

```
http://127.0.0.1:8080
```

Le jeu devrait se charger et s'exécuter dans le Canvas.

---

## Commandes et contrôles

### Touches de déplacement :
Le joueur (carré jaune) se déplace uniquement via les touches fléchées :

- **ArrowUp** : Déplacer vers le haut
- **ArrowDown** : Déplacer vers le bas
- **ArrowLeft** : Déplacer vers la gauche
- **ArrowRight** : Déplacer vers la droite

### Objectifs du jeu :

- Éviter les obstacles (statique ou animé).
- Atteindre la sortie verte (placée en bas à droite) pour passer au niveau suivant.
- Lorsqu'un niveau est complété, un message d'alerte s'affiche et le niveau augmente, ce qui peut entraîner l'ajout de nouveaux obstacles.

### Objets affichés :

- **Carré jaune** : Le joueur.
- **Carré bleu** : Un objet qui suit la souris.
- **Obstacles** : Des obstacles que le joueur doit éviter.
- **Sortie verte** : La zone à atteindre pour progresser au niveau suivant.

