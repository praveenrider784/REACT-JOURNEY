import React, { useState } from 'react'

function Reacthooks() {
 const[count,setcount]=useState(0)
const increement = () =>{
       setcount(count+1)
  }
    

  return (
    <button onClick={increement}>Count {count}</button>
  )
}

export default Reacthooks