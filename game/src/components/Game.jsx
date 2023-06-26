import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Game = () => {
  const { gameId } = useParams();
  return (
    <div>
      <>game id: {gameId}</>
    </div>
  );
};

export default Game;
