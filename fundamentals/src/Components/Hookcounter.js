import React, { useState } from 'react'

function Hookcounter() {
    const initial=0;
    const[count,setcount]=useState(0)
 function Increement(){
    for(let i=0;i<5;i++){
        setcount(prevstate=>
            prevstate+1
        )
    }
 }
  return (
    <div>
    <div>Hookcounter :count{count}</div>
    <button onClick={()=>setcount(count+1)}>Increement</button>
    <button onClick={()=>setcount(count-1)}>Decreement</button>
    <button onClick={()=>setcount(initial)}>Reset</button>
    <button onClick={Increement}>in5</button>
    </div>
  )
}

export default Hookcounter