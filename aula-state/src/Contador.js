import React, { useState } from 'react'
export default function Contador (){
    const [num, setNum]= useState (0)
 return (
     <div>
     <p>
         Contador {num}
       
     </p>
     <button onClick={()=>setNum(num+1)} >Somar</button>
     <button onClick={()=>setNum(num-1)} >Subtrair</button>
     <button onClick={()=>setNum(0)} >Zerar</button>
     </div>
 )
}