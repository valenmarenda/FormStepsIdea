import React, { useContext, useState } from 'react';
import FormularioContext from './FormularioContext';

function PasoDos({ siguientePaso, anteriorPaso }) {
  const { datosFormulario, actualizarDatosFormulario } = useContext(FormularioContext);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  function handleInputChange(event) {
    const { name, value } = event.target;

    switch (name) {
      case 'input1':
        setInput1(value);
        break;
      case 'input2':
        setInput2(value);
        break;
      case 'input3':
        setInput3(value);
        break;
      default:
        break;
    }
  }


  function handleAceptarClick() {
    actualizarDatosFormulario({ ...datosFormulario, input1, input2, input3 });
    siguientePaso();
  }

  return (
    <div>
      <h1>Paso 2</h1>
      <div>
        <label>
          Input 1:
          <input type="text" name="input1" value={input1} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Input 2:
          <input type="text" name="input2" value={input2} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Input 3:
          <input type="text" name="input3" value={input3} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <button onClick={anteriorPaso}>Volver</button>
        <button onClick={handleAceptarClick}>Aceptar</button>
      </div>
    </div>
  );
}

export default PasoDos;
