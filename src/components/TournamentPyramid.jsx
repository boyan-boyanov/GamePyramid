import React, { useState } from "react";

const TournamentPyramid = ({ players }) => {
  const [matches, setMatches] = useState([players]);
  const [completedMatches, setCompletedMatches] = useState([]);

  const handleWin = (level, index) => {
    let newMatches = [...matches];
    let newCompletedMatches = [...completedMatches];

    // Determine the opponent's index
    let opponentIndex = index % 2 === 0 ? index + 1 : index - 1;

    // Add winner to the next level
    if (!newMatches[level + 1]) newMatches[level + 1] = [];
    newMatches[level + 1][Math.floor(index / 2)] = newMatches[level][index];

    // Mark the current match as completed
    if (!newCompletedMatches[level]) newCompletedMatches[level] = [];
    newCompletedMatches[level][index] = true;
    newCompletedMatches[level][opponentIndex] = true;

    // Update state
    setMatches(newMatches);
    setCompletedMatches(newCompletedMatches);
  };

  return (
    <div>
      <h4>Tournament Pyramid</h4>
      <div className="pyramid">
        {[...matches].reverse().map((level, levelIdx) => (
          <div key={matches.length - 1 - levelIdx} className="level">
            {level.map((player, playerIdx) => (
              <div key={playerIdx} className="player">
                {player}
                {!completedMatches[matches.length - 1 - levelIdx]?.[
                  playerIdx
                ] && (
                  <button
                    onClick={() =>
                      handleWin(matches.length - 1 - levelIdx, playerIdx)
                    }
                  >
                    Win
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentPyramid;
