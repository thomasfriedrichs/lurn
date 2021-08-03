import React from 'react';

function withToolTip(Component) {
  return class withToolTip extends React.Component {
    render() {
      return (
        <div>
          <Component/>
        </div>
      )
    }
  }
}

export default withToolTip;