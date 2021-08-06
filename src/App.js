import React, { Component } from 'react';
import Login from './context/Login';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';

class App extends Component {
  handleLoggedIn = username => {
    console.log("getting the user:" + username);
    const user = { name: 'Thomas' };
    this.state({ currentUser: user})
  }
  state = { currentUser: null};

  render() {
    return (
      <UserContext.Provider 
        value={{ 
          currentUser: this.state.currentUser, 
          onLoggedIn: this.handleLoggedIn 
        }}
      >
        <div>
          <MoviePage/>
          <Login/>
        </div>
      </UserContext.Provider> 
    );
  }
}

export default App;
