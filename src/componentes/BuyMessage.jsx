import React from "react";
import { Link } from "react-router-dom";

const BuyMessage = ({ ordenRealizada }) => {
  return (
    
    <section className="buy-msg-container">
    <p className="buy-msg">
      Gracias por confiar en nosotros!
      <br />
      <br />
      Te hemos enviado un correo para continuar
      con la compra.
      <br />
      <br />
      Tu número de orden es: <b>{ordenRealizada}.</b>
      <br />
      <br />
      <Link to="/">
        <span style={{ color: "#044371", textDecoration: "underline" }}>
          Volver al inicio
        </span>
      </Link>
    </p>
  </section>
  );
};

export default BuyMessage;
