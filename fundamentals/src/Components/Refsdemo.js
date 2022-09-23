import React, { Component } from 'react'

 class Refsdemo extends Component {
    constructor(props) {
      super(props)
     this.inputref=React.createRef();
    }
    componentDidMount(){
        this.inputref.current.focus()
    }
    eventHandler=()=>{
        alert(this.inputref.current.value);
    }
  render() {
    return (
        <React.Fragment>
            <div>
      <input type="text" placeholder='name' ref={this.inputref} />
      </div>
     <button onClick={this.eventHandler}>click me</button>
     </React.Fragment>
    )
  }
}

export default Refsdemo