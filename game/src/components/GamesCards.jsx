import React, {useState} from 'react';
import { data } from '../data/data';

const GamesCards = () => {
 const[games, setGames] =useState(data); 

 const filterType = (category) => {
   setGames (
    data.filter((item) => {
      return item.category === category;
    }) 
   );

 };

 const filterLevel = (level) => {
  setGames (
   data.filter((item) => {
     return item.level === level;
   }) 
  );

};




  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
   

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Type */}
        <div >
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justify-between flex-wrap'>
            <button onClick={()=>setGames(data)} className='m-1 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white'>All</button>
            <button onClick={()=>filterType('puzzle')} className='m-1 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white'>Puzzle</button>
            <button onClick={()=>filterType('shooting')} className='m-1 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white'>Shooting</button>
            <button onClick={()=>filterType('adventure')} className='m-1 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white'>Adventure</button>
          </div>
        </div>
        {/* Filter level */}
        <div>
          <p className='font-bold text-gray-700'>Filter level</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button onClick={()=>filterLevel('⭐')} className='m-1 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white'>⭐</button>
            <button onClick={()=>filterLevel('⭐⭐')} className='m-1 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white'>⭐⭐</button>
            <button onClick={()=>filterLevel('⭐⭐⭐')} className='m-1 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white'>⭐⭐⭐</button>
          </div>
        </div>
      </div>
      {/* display games */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
      {games.map((items, index)=> (
        <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
          <img src={items.image}  alt={items.name} className='w-full h-[200px] rounded-t-lg'/>
          <div>
            <p className='font-bold '>{items.name}</p>
            <p>
              <span> {items.level} </span>
            </p>
          </div>
        </div>

      ))}

      </div>
    </div>
  )
}

export default GamesCards  