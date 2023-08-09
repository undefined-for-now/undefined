import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
// Dockup data
import { data } from "../data/data";

// Games
import Candy_Crush from "./games/puzzle/candy_crush/components/Candy_Crush"


const Game = () => {
  const { gameId } = useParams();

  //related games
  const [relatedGames, setRelatedGames] = useState(data);

  const [gameStart, setGameStart] = useState(false);

  return (
    <div className="flex flex-row gap-5 w-screen justify-between bg-yellow-400 h-full">
      <div className=" w-32 ">{/* side nav */}</div>
      <div className="bg-yellow-200 w-full flex flex-col gap-3 p-4">
        {/* game screen */}
        <div className=" bg-yellow-100 w-full h-96 flex flex-col justify-center items-center gap-3">
          {gameStart ? 
            <Candy_Crush />
            :
            <>
              <div className="font-semibold text-4xl text-Gameyellow-800">
                {relatedGames[Number(gameId) - 1].name + " "}
              </div>
              <button 
                className="rounded-3xl text-white bg-yellow-400 px-4 py-2 border-none"
                onClick={() => {setGameStart(!gameStart);}}
              >
                GAME START
              </button>
            </> 
          }
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-2xl text-yellow-800">Game name </h2>
          <p>fksdjfdsjfoiwejjdskljckldsjdjfjeiwjfijkl</p>
          <h2 className="font-semibold text-xl text-yellow-800">
            Description{" "}
          </h2>
          <p>fksdjfdsjfoiwejjdskljckldsjdjfjeiwjfijkl</p>
        </div>
        {/* comments */}
        <div>
          <h2 className="font-bold text-3xl text-black">Comments</h2>
          <div className="bg-white w-full">
            <ul className="mt-3 flex flex-col gap-3">
              {[
                {
                  id: 1,
                  content: "good game ever, perfect UI",
                  writer: "Jeeex",
                },
                {
                  id: 2,
                  content: "bad game ever, perfect UI",
                  writer: "Baddddddies",
                },
                {
                  id: 3,
                  content: "not so good game ever, perfect UI",
                  writer: "Bdkdd",
                },
              ].map((item) => (
                <li key={item.id} className="flex flex-col gap-1">
                  {/* <span>{vote.writer}</span> */}
                  <span className="px-5">{item.writer}</span>
                  <p className="bg-yellow-100 rounded-3xl p-2 px-5 ">
                    {item.content}
                  </p>
                  <div
                    className="flex gap-2 items-center"
                    onClick={() => {
                      //   clickVoteLikeButton(vote);
                    }}
                    // data-id={item.id}
                  ></div>
                </li>
              ))}
            </ul>
            <form
              //   onSubmit={addComment}
              method="post"
              className="flex flex-col gap-2 bg-yellow-100 p-10"
            >
              <input
                // ref={newCommentRef}
                className="h-14 bg-white border-gray-500 rounded-md px-2 py-1"
                type="text"
                name="new_vote"
                required
              />
              <button className="flex self-end rounded-lg px-3 py-1 text-md border-none bg-yellow-400 text-white">
                ADD
              </button>
            </form>
          </div>
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
