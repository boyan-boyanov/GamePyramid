import React, { useState } from "react";

const PlayerList = ({ players, addPlayer }) => {
  const [playerName, setPlayerName] = useState("");

  const handleAddPlayer = (e) => {
    e.preventDefault();
    addPlayer(playerName);
    setPlayerName("");
  };

  return (
    <div>
      <h4>Players</h4>
      <form onSubmit={handleAddPlayer}>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter player name"
        />
        <button type="submit">Add Player</button>
      </form>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
