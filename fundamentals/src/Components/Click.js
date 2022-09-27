import React, { Component } from 'react'
import Withcounter from './Withcounter';

 class Click extends Component {
  render() {
    const{x,increement}=this.props;
    return (
      <button onClick={increement}>clicked me for {x} times</button>
    )
  }
}

export default Withcounter(Click,10)