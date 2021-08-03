import React from 'react';

function WithToolTip(Component) {
  return class WithToolTip extends React.Component {
    state = { showToolTip: false };

    mouseOver = () => this.setState({ showToolTip: true })

    mouseOut = () => this.setState({ showToolTip: false })

    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component/>
        </div>
      )
    }
  }
}

export default WithToolTip;