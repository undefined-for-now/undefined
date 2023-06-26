import React, { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
// fake data
import { data } from "../data/data";

const Game = () => {
  const { gameId } = useParams();
  //related games
  const [relatedGames, setRelatedGames] = useState(data);

  return (
    <div className="flex flex-row gap-5 w-screen justify-between bg-yellow-400 h-full">
      <div className=" w-32 ">{/* side nav */}</div>
      <div className="bg-yellow-200 w-full flex flex-col gap-3 p-4">
        {/* game screen */}
        <div className=" bg-yellow-100 w-full h-96 flex flex-col justify-center items-center gap-3">
          <div className="font-semibold text-4xl text-yellow-800">
            GAME NAME{" "}
          </div>
          <button className="rounded-3xl text-white bg-yellow-400 px-4 py-2 border-none">
            GAME START
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-2xl text-yellow-800">Game name </h2>
          <p>fksdjfdsjfoiwejjdskljckldsjdjfjeiwjfijkl</p>
          <h2 className="font-semibold text-xl text-yellow-800">
            Description{" "}
          </h2>
          <p>fksdjfdsjfoiwejjdskljckldsjdjfjeiwjfijkl</p>
        </div>
      </div>{" "}
      <div className="bg-yellow-400 w-96">
        {" "}
        <div className="flex flex-col gap-2 m-3">
          {relatedGames.map((item, index) => (
            <Link to={`game/${item.id}`} key={item.id}>
              <div className="border hover:scale-105 duration-300 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-32 rounded-t-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
