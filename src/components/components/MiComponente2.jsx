import React from "react";

const MiComponente2 = () => {
  let nombre = "Luis";
  const miEvento = (edad,genero) => {
    alert(`Hola ${nombre} tu edad es ${edad} y eres ${genero ? 'Hombre':'Mujer'}`);
  };
  return (
    //Una etiqueta vacia es un fragment
    <>
      <h2>Mi Componente, soy {nombre}.</h2>
      <br/>
      <button onClick={()=>miEvento(26,true)}>Evento</button>
    </>
  );
};

export default MiComponente2;
