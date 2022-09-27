import React, { Component } from 'react'
import Withcounter from './Withcounter';

class Hover extends Component {
  render() {
    const {x,increement}=this.props;
    return (
      <h2 onMouseOver={increement}>u hovered over {x} times</h2>
    )
  }
}

export default Withcounter(Hover,10)