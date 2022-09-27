import React, { Component } from 'react'
import Fr from './Frc'

 class Forwardingpref extends Component {
    constructor(props) {
      super(props)
    
      this.forwardingref=React.createRef();
    }
    handler=()=>{
        this.forwardingref.current.focus()
    }
  render() {
    
    return (
        <>
      <Fr  ref={this.forwardingref}/>
      <button onClick={this.handler}>click me</button>
      </>
    )
  }
}

export default Forwardingpref