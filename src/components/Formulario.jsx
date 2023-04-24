import React, { useContext, useState } from 'react';
import PasoUno from './PasoUno';
import PasoDos from './PasoDos';
import PasoTres from './PasoTres';
import PasoCuatro from './PasoCuatro';
import FormularioContext, { FormularioProvider } from './FormularioContext';

function Formulario() {
  const [pasoActual, setPasoActual] = useState(1);
  const { datosFormulario, actualizarDatosFormulario } = useContext(FormularioContext);

  function siguientePaso() {
    setPasoActual((paso) => paso + 1);
  }

  function anteriorPaso() {
    setPasoActual((paso) => paso - 1);
  }

  function enviarFormulario() {
    // Aquí podrías enviar los datos del formulario al endpoint correspondiente
    console.log('Datos del formulario:', datosFormulario);
  }

  function renderizarPaso() {
    switch (pasoActual) {
      case 1:
        return <PasoUno siguientePaso={siguientePaso} />;
      case 2:
        return <PasoDos siguientePaso={siguientePaso} anteriorPaso={anteriorPaso} />;
      case 3:
        return <PasoTres siguientePaso={siguientePaso} anteriorPaso={anteriorPaso} />;
      case 4:
        return <PasoCuatro enviarFormulario={enviarFormulario} anteriorPaso={anteriorPaso} />;
      default:
        return <PasoUno siguientePaso={siguientePaso} />;
    }
  }

  return (
    <div>
      {renderizarPaso()}
    </div>
  );
}

function FormularioWrapper() {
  return (
    <FormularioProvider>
      <Formulario />
    </FormularioProvider>
  );
}

export default FormularioWrapper;
