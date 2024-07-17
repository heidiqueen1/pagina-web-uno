import React from "react";
import "../hojas-de-estilos/Contenedores.css";

const Contenedores = ({ id, titulo, sub, cuerpo, style }) => {
  return (
    <div className="contenedor-principal" id={id} style={style}>
      <h1>{titulo}</h1>
      <h2>{sub}</h2>
      <p>{cuerpo}</p>
    </div>
  );
};

export default Contenedores;
