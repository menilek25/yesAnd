import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import GameDetails from './components/games/GameDetails';
import LogIn from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import CreateGame from './components/games/CreateGame';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/game/:id' component={GameDetails} />
            <Route path='/login' component={LogIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateGame} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
