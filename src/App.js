import React, { Component } from 'react';
import Users from './hooks/Users';

class App extends Component {
  state = { currentUser: { name: "Thomas" }};

  render() {
    return (
      <div>
        <p>Hello World</p>
        <Users/>
      </div>
    );
  }
}

export default App;
