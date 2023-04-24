import React, { useContext } from "react";
import FormularioContext from "./FormularioContext";

function PasoCuatro({ anteriorPaso}) {
  const { datosFormulario } = useContext(FormularioContext);

  function handleRetroceder(event) {
    event.preventDefault();
    anteriorPaso();
  }
  function handleEnviar() {
console.log(datosFormulario)
  }

  return (
    <div>
      <p>Los datos han sido enviados correctamente:</p>
      <ul>
        <li>Opción elegida: {datosFormulario.opcion}</li>
        <li>Campo 1: {datosFormulario.input1}</li>
        <li>Campo 2: {datosFormulario.input2}</li>
        <li>Campo 3: {datosFormulario.input3}</li>
        <li>Campo 4: {datosFormulario.input4}</li>
        <li>Campo 5: {datosFormulario.input5}</li>
        <li>Campo 6: {datosFormulario.input6}</li>
      </ul>
      <button type="button" onClick={handleRetroceder}>
        Volver
      </button>
      <button type="button" onClick={handleEnviar}>
        Enviar
      </button>
    </div>
  );
}

export default PasoCuatro;
