import React,{useState} from 'react'

function Usestatearray() {
    const[items,setitem]=useState([])
    const additem=()=>{
       setitem([...items,{
        id:items.length,
        value:Math.floor(Math.random()*10)+1
       }])
    }
  return (
    <div>
        <button onClick={additem}>add </button>
       <div>list of items:</div> 
        {
              items.map(i=>(
                <li key={i.id}>{i.value}</li>
              )
                
                )
        }
    </div>
  )
}

export default Usestatearray