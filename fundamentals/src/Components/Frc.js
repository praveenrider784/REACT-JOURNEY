import React from 'react'

 const Frc=React.forwardRef((props,ref) => {
    return (
     <input type="text" ref={ref}/>
    )
  }
  ) 
export default Frc