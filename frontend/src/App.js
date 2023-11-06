import GamesCards from "./components/GamesCards";
import Home from "./components/Home";
import Game from "./components/Game";
import Navbar2 from "./components/Navbar2";

import RecentlyCards from "./components/RecentlyCards";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="max-w-[1640px] center-screen">
        <Navbar2 />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:gameId" element={<Game />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
