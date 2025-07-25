#  Scrabble Game (React)

Welcome to **Scrabble Game**, a web-based implementation of the classic word board game built using React. This game allows players to take turns forming words on a Scrabble board and scoring points based on tile values and board bonuses.

## Features

- Interactive 15x15 Scrabble board
- Drag & click tile placement
- Double Letter (DL), Triple Letter (TL), Double Word (DW), and Triple Word (TW) bonuses
- Turn-based play for 2 players or player vs computer
- Timer (60 seconds per turn)
- Word validation using a dictionary
- Score tracking and winner announcement
- Responsive design

##  Tech Stack

- React (with Hooks)
- JavaScript
- CSS (custom styles)
- React Router for page navigation

## Folder Structure
scrabble-game/
│
├── src/
│ ├── components/
| | ├── ScrabbleBoard.css
│ │ ├── ScrabbleBoard.jsx
│ │ ├── TileRack.jsx
│ │ ├── WordValidator.jsx
│ │ └── TileBag.js
│ ├── pages/
│ │ ├── Game.jsx
│ │ └── WinnerPage.jsx
│ │ └── WinnerPage.css
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── public/
├── README.md
└── package.json

## Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:Natasha-01-design/Scrabble-Game-Group1.git
cd scrabble-game

2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the App Locally
bash
Copy
Edit
npm run dev
Open http://localhost:5173 to view the app in your browser.

   Gameplay Rules
Players take turns placing tiles to form valid words.

The first word must pass through the center tile (*).

Words must be valid and connect with existing tiles.

Bonus tiles multiply word/letter values.

After 5 turns each (or a set limit), the player with the highest score wins.

Future Improvements
Smart computer AI

Save/load game state

Multiplayer via WebSocket or Firebase

Dark mode

Improved mobile layout

 License
This project is open-source and available under the MIT License.

yaml
Copy
Edit

---



