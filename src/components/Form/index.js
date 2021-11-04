// este index.js contiene el componente Lyrics

//  importa react y use context
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// importa el contexto parcial LyricsContext del LyricsContext.js
import { FormContext } from "../../contexts/FormContext";

import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';



// importa componentes comunes de la aplicacion
import ProgressBar from "../Common/ProgressBar";
import Message from "../Common/Message";
import ButtonPrimary from "../Common/ButtonPrimary";

// importa el que imprime el detalle de las liricas
import Details from "./Details";
// importa Imagenes requeridas
import track1 from "./../../assets/img/track.png";
import album1 from "./../../assets/img/album.png";

// componente Lyrics tipo const, con llaves, requiere Return y usa export default
const Form = () => {

  // importa los elementos del contexto de Lyrics
  // const [type1, setType1] = useState(type1); 
  const { doneFetchTrack, track, type1, updateTrack } = useContext(FormContext);

  /* const tipo = type1; */

  // const [tipo, setType1] = useState(type1); 
  const [valor1, setValor1] = useState(false);

  console.log("Valor de Type1 del Context en Index.js antes de llamar a  Details.js: ", type1)

  console.log("Valor de Track en Index.js antes de llamar a  Details.js: ", track)

  //!valor1 ? console.log("Type1 antes de Detail.js: ",type1) : console.log("valor 1 TRUE");

  
  // return principal del componente Lyrics  
  return (
    <>

       {doneFetchTrack ? (
        !Array.isArray(track) ?   ( 
          <Details track={track} />
         ) : (
          <Message text="No Results" />
        )
      ) : (
        <ProgressBar />
      )} 
      <ButtonPrimary type="Back" to="/" /> {/* llamada a BP para retorno al Home */}

      <Link className="buttonPrimary" to={`/updatetutorial/${track.id}`}>   

        <Button   
          variant="outlined"
          color="primary"
          onClick={ () => { 
            if ( type1 === "Editar tutorial" ) {
               // setType1("Modificar"); 
               setValor1(false);
            }
            else
            {
              console.log("Llamado a funcion updateTrack"); 
              console.log("Valor track antes de llamar a updateTrack: ",track);
              //updateTrack(track.id, track); 
            }
          }}
          startIcon= { type1 === "Editar tutorial" ? <EditIcon /> : <ClearIcon /> }
          disabled = {valor1}          
        >
          <img
            alt={type1 === "Editar tutorial" ? "Editar tutorial" : "Modificar"}
            src={type1 === "Editar tutorial" ? track1 : album1}
          />
          {type1 === "Editar tutorial" ? " Editar tutorial" : " Modificar"}

        </Button>

      </Link>

      {/* <Link className="buttonPrimary" to={`/updatetutorial/${track.id}`}>
      <Button 
        variant="outlined"
        color="primary"
        onClick={ () => { 
          console.log("Llamado a funcion updateTrack"); 
          //console.log("Valor de e.type: ", e);
          //console.log("Valor de e.type: ", e.type);
          //console.log("Valor de e.key: ", e.key)
          //updateTrack(); 
        }}
        startIcon= {<EditIcon />}
        disabled = {false}          
      >
        Modificar tutorial
      </Button>
      </Link> */}
      
    </>
  );
};

export default Form;



