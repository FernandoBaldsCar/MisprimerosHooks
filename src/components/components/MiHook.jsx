import React, { useState } from "react";
let state = 0
const MiHook = () => {

    const [titulo,setTitulo] = useState("Titulo Original")
    
    const cambiarTitulo = ()=>{
        state ++
        setTitulo(`Cambiando el titulo ${state}`) 
        
    }
    const reset = ()=>{
        state = 0
        setTitulo(`Titulo Original ${state}`)
    }
    return (
        <>
            <h2>{titulo}</h2>
            <br></br>
            <button onClick={()=>cambiarTitulo()}>Hook</button>
            <button onClick={()=>reset()}>Hook</button>
        </>
    )
};

export default MiHook;
