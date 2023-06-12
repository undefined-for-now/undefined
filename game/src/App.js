import GamesCards from "./components/GamesCards";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import RecentlyCards from "./components/RecentlyCards";
import {BrowserRouter, Route, Switch } from 'react-router-dom' ;


function App() {
  return (
    <BrowserRouter>
   <div>
      
    <Navbar2/> 
    <RecentlyCards/>
    <GamesCards/>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
