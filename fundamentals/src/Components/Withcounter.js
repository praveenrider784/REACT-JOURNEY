import React from 'react'

  const Withcounter=(WrappedComponent,number) => {
   
   class Withcounter extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
        x:0
      }
    }
    increement=()=>{
        this.setState(prevstate=>{
            return {x:prevstate.x+number}

        })
    }
    render(){
  return (
    <>
     <WrappedComponent x={this.state.x} increement={this.increement}/>
     
     </>
  )
    }
}
return Withcounter
}

export default Withcounter