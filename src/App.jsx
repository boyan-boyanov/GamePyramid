import React, { useState } from "react";
import GameList from "./components/GameList";
import "./styles.css";

const App = () => {
  const [games, setGames] = useState([]);

  const addGame = (gameName) => {
    setGames([...games, { name: gameName, players: [] }]);
  };

  return (
    <div className="container">
      <h1>Game Tournament2</h1>
      <GameList games={games} addGame={addGame} />
    </div>
  );
};

export default App;
