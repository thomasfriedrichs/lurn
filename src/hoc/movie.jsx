import React, { Component } from 'react';
import WithToolTip from './WithToolTip';

class Movie extends Component {
  render() {
    return (
      <div>
        Movie
      </div>
    );
  }
}

export default WithToolTip(Movie);

