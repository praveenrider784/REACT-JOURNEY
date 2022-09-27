import React, { useState } from 'react'

function Usestateobject() {
    const[name,setname]=useState({firstname:" ",lastname:" "})
  return (
    <div>usestateobject
    <input type="text" value={name.firstname} onChange={e=>setname({...name,firstname:e.target.value})}/>
    <input type="text" value={name.lastname} onChange={e=>setname({...name,lastname:e.target.value})}/>
    <h2>{name.firstname}</h2>
    <h2>{name.lastname}</h2>



    </div>
  )
}

export default Usestateobject