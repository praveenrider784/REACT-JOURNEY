import React, { Component } from 'react'
import Input from './Inputref'

class Parentinputref extends Component {
    constructor(props) {
      super(props)
    
     this.componentref=React.createRef();
    }
    Eventhandler=()=>{
        this.componentref.current.focusinput();
    }
  render() {
    return (
        <>
        <Input ref={this.componentref} />
        <button onClick={this.Eventhandler}>focus</button>
        </>
    
    )
  }
}

export default Parentinputref