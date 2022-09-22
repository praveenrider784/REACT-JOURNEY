import React, { Component } from 'react'

class Inputref extends Component {
  constructor(props) {
    super(props)
  
   this.inpuref=React.createRef();
  }
  focusinput(){
    this.inpuref.current.focus();
  }
    render() {
    
    return (
     <input type="text" ref={this.inpuref}/>
    )
  }
}

export default Inputref