import React, { useContext, useState } from 'react';
import FormularioContext from './FormularioContext';

function PasoTres({ siguientePaso, anteriorPaso }) {
  const { datosFormulario, actualizarDatosFormulario } = useContext(FormularioContext);
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');

  function handleInputChange(event) {
    const { name, value } = event.target;

    switch (name) {
      case 'input4':
        setInput4(value);
        break;
      case 'input5':
        setInput5(value);
        break;
      case 'input6':
        setInput6(value);
        break;
      default:
        break;
    }
  }

  function handleAceptarClick() {
    actualizarDatosFormulario({ ...datosFormulario, input4, input5, input6 });
    siguientePaso();
  }

  return (
    <div>
      <h1>Paso 3</h1>
      <div>
        <label>
          Input 4:
          <input type="text" name="input4" value={input4} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Input 5:
          <input type="text" name="input5" value={input5} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Input 6:
          <input type="text" name="input6" value={input6} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <button onClick={anteriorPaso}>Volver</button>
        <button onClick={handleAceptarClick}>Aceptar</button>
      </div>
    </div>
  );
}

export default PasoTres;
