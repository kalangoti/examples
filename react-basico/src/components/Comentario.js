import React from "react";
import "./Comentario.css";

// Stateless Components
const Comentario = (props) => (
  <div className="Comentario">
    <h2>{props.name}</h2>
    <p>{props.email}</p>
    <p>{props.children}</p>
    <p>{props.date.toString()}</p>
  </div>
);

export default Comentario;
