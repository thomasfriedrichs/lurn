import React, { Component } from 'react';
import WithToolTip from './WithToolTip';

class Movie extends Component {
  render() {
    return (
      <div>
        Movie
        {this.props.showToolTip && <div>Some Tooltip</div>}
      </div>
    );
  }
}

export default WithToolTip(Movie);

