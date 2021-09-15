import React, { Fragment } from "react";

const Cancion = ({ letra }) => {
  if (letra.length === 0) return null;
  return (
    <Fragment>
      <h2>Letra Canción</h2>
      <p>{letra}</p>
    </Fragment>
  );
};

export default Cancion;
