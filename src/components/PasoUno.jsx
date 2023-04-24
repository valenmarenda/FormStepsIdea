import React, { useContext, useState } from 'react';
import FormularioContext from './FormularioContext';

function PasoUno({ siguientePaso }) {
  const { datosFormulario, actualizarDatosFormulario } = useContext(FormularioContext);
  const [opcion, setopcion] = useState('');

  function handleRadioChange(event) {
    setopcion(event.target.value);

  }

  function handleAceptarClick() {
    actualizarDatosFormulario({ ...datosFormulario, opcion });
    siguientePaso();
  }

  return (
    <div>
      <h1>Paso 1</h1>
      <div>
        <p>Selecciona una opción:</p>
        <label>
          <input type="radio" name="opciones" value="opcion1" onChange={handleRadioChange} />
          Opción 1
        </label>
        <label>
          <input type="radio" name="opciones" value="opcion2" onChange={handleRadioChange} />
          Opción2
        </label>
        <label>
          <input type="radio" name="opciones" value="opcion3" onChange={handleRadioChange} />
          Opción 3
        </label>
      </div>
      <div>
        <button onClick={siguientePaso}>Cancelar</button>
        <button onClick={handleAceptarClick}>Aceptar</button>
      </div>
    </div>
  );
}

export default PasoUno;
