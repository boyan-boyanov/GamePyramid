import React, { useState } from "react";
import Game from "./Game";

const GameList = ({ games, addGame }) => {
  const [gameName, setGameName] = useState("");

  const handleAddGame = (e) => {
    e.preventDefault();
    addGame(gameName);
    setGameName("");
  };

  return (
    <div>
      <h2>Games</h2>
      <form onSubmit={handleAddGame}>
        <input
          type="text"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          placeholder="Enter game name"
        />
        <button type="submit">Add Game</button>
      </form>
      <div>
        {games.map((game, index) => (
          <Game key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameList;
