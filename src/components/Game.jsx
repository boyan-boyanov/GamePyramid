import React, { useState } from "react";
import PlayerList from "./PlayerList";
import TournamentPyramid from "./TournamentPyramid";

const Game = ({ game }) => {
  const [players, setPlayers] = useState(game.players);
  const [randomizedPlayers, setRandomizedPlayers] = useState([]);

  const addPlayer = (playerName) => {
    setPlayers([...players, playerName]);
  };

  const randomizeTournament = () => {
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
    setRandomizedPlayers(shuffledPlayers);
  };

  return (
    <div>
      <h1>{game.name}</h1>
      <PlayerList players={players} addPlayer={addPlayer} />
      <button className="randomize" onClick={randomizeTournament}>
        Randomize Tournament
      </button>
      {randomizedPlayers.length > 0 && (
        <TournamentPyramid players={randomizedPlayers} />
      )}
    </div>
  );
};

export default Game;
