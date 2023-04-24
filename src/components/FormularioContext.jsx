import React, { createContext, useState } from 'react';

const FormularioContext = createContext();

function FormularioProvider(props) {
  const [datosFormulario, setDatosFormulario] = useState({
    opcion: '',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
  });

  function actualizarDatosFormulario(nuevosDatos) {
    setDatosFormulario((datosAnteriores) => ({
      ...datosAnteriores,
      ...nuevosDatos,
    }));
  }

  function reiniciarDatosFormulario() {
    setDatosFormulario({
      opcion: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
    });
  }

  const value = {
    datosFormulario,
    actualizarDatosFormulario,
    reiniciarDatosFormulario,
  };

  return (
    <FormularioContext.Provider value={value}>
      {props.children}
    </FormularioContext.Provider>
  );
}

export { FormularioProvider };
export default FormularioContext;
