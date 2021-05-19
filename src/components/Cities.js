import React, { useState } from 'react';
import Towns from './Towns.js';

function Cities(props){
    const [click2,setClick2]=useState(false);
    return(
        <div>
           <li onClick={()=>setClick2(!click2)} id={`city${props.id}`}>
             <button>{props.city.name}</button>
           </li>
      <ul>
          {click2?props.city.towns.map((town,i)=>{
              return(
                <Towns town={town} key={i+1} id={i+1}/>
              )
          }):""}
      </ul>
        </div>
    )
}
export default Cities;