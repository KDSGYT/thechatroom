import React, { useState } from 'react';
import Window from './Views/Window/Window'
import Home from './Views/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  const [userName, setuserName] = useState();


  return (
    <div className="App">
      <header className="App-header">
        <Router >
          <Switch >
            <Route exact path="/" >
              <Home setUsername={setuserName} />
            </Route>
            <Route path="/chatroom">
              <Window userName={userName || "placeholder"} setUsername={setuserName} />
            </Route>
          </Switch>
        </Router>
      </header>
    </div> 
  );
}

export default App;
