import React, { useState } from 'react';
import Window from './components/Window'
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';

function App() {
  const [userName, setuserName] = useState("KDSG");


  return (
    <div className="App">
      <header className="App-header">
        <Router >
          <Switch >
            <Route exact path="/" >
              <Home setUsername={setuserName} />
            </Route>
            <Route path="/chatroom">
              <Window userName={userName} />
            </Route>
          </Switch>

        </Router>


        {/* <Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route> */}



      </header>
    </div>
  );
}

export default App;
