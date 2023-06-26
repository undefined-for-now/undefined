import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";

const GamesCards = () => {
  const [games, setGames] = useState(data);

  const gameTypes = ["puzzle", "shooting", "adventure"];

  const filterItems = (type, value) => {
    setGames(
      data.filter((item) => {
        return item[type] == value;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setGames(data)}
              className="m-1 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white"
            >
              All
            </button>

            {gameTypes.map((category) => (
              <button
                onClick={() => filterItems("category", category)}
                className="m-1 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white"
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        {/* Filter level */}
        <div>
          <p className="font-bold text-gray-700">Filter level</p>
          <div className="flex justify-between max-w-[390px] w-full">
            {[1, 2, 3].map((level) => (
              <button
                onClick={() => filterItems("level", level)}
                className="m-1 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white"
              >
                {"⭐".repeat(level)}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* display games */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {games.map((item, index) => (
          <Link to={`game/${item.id}`} key={item.id}>
            <div className="border shadow-lg hover:scale-105 duration-300 rounded-lg">
              good
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] rounded-t-lg"
              />
              <div>
                <p className="font-bold ">{item.name}</p>
                <p>
                  <span> {"⭐".repeat(item.level)} </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamesCards;
