// este index.js contiene el componente Form

//  importa react, use state y use context
import React, { useContext } from "react";

import { FormContext } from "../../contexts/FormContext";

// importa componentes comunes de la aplicacion
import ProgressBar from "../Common/ProgressBar";
import Message from "../Common/Message";

// importa el que muestra el formulario con los datos
import Details from "./Details";


// componente Form tipo const, con llaves, requiere Return y usa export default
const Form = (props) => {

  // importa los elementos del contexto de FormContext
  const { doneFetchTrack, track  } = useContext(FormContext);

  console.log("Props.boton en Index.js antes de ir a  Details.js: ", props.boton);

  console.log("Valor de Track en Index.js antes de llamar a  Details.js: ", track);

  const boton = props.boton;
  console.log("VALOR DE boton antes de Return de ir a details.js: ", boton);
  
  // return principal del componente Form  
  return (
    <>

       {doneFetchTrack ? (
         !Array.isArray(track) ?   (  
          <Details track={track} boton={boton}  />
          ) : (
          <Message text="No Results" />
        )
      ) : (
        <ProgressBar />
      )}  
      
    </>
  );
};

export default Form;



