import React from 'react';
import './App.css';
import { BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom'
 
import Navigation from './components/Navigation';
function App() {
  return (
    <Router>
       <Navigation/>
       <Switch>
        <Route path="/characters"component={Characters}/>
        <Route path="/locations"component={Locations}/>
        <Route path="/"component={Home}/>
       </Switch>
        
    </Router>
    
  );
}

  
  function Home(){
    return (
      <div className="container home">
        <h2>Rick and Morty Router</h2>
        <div className="poster">
          <img alt="rickandmorty router" src="https://cdn.custom-cursor.com/collections/rick_and_morty.png"/>
        </div>
        </div>
    )
  }

  function Characters(){
    return (
    <h2>Characters</h2>
    )
  }
  function Locations(){
    return (
    <h2>Locations</h2>
    )
  }



export default App;
