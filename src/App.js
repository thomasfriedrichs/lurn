import React, { Component } from 'react';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';

class App extends Component {
  state = { currentUser: { name: "Thomas" }};

  render() {
    return (
      <UserContext>
        <div>
          <MoviePage/>
        </div>
      </UserContext>
    );
  }
}

export default App;
