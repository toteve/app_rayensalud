// importamos el useContext
import React, { useContext } from "react";

// importamos solo la parte de export const TutorsContext de TutorsContext.js
import { TutorsContext } from "./../../contexts/TutorsContext";



// import Material UI
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// importa Imagenes requeridas
import track from "./../../assets/img/track.png";
import album from "./../../assets/img/album.png";

// Importa un componente comun
import ButtonPrimary from "./../Common/ButtonPrimary";





// componente Track que pinta cada componente individual

const Track = ({ id, nombre, profesor, fecha }) => { 
  
 // defines que elementos del Contexto de TutorsContext vas a utilizar
 const { convertir } = useContext(TutorsContext); 
  
 return (
  <Grid item xs={12} sm={6}>
    {console.log("Valor de commontrack_id en track.js enviado de tracks.js: ", id)}
    
    <Paper className="defaultPaper">
      <h3>{convertir(fecha)}</h3>
      <ul>
        <li>
          <img src={track} alt="track" />
          <strong>Titulo: </strong>
          <span>{nombre}</span>
        </li>
        <li>
          <img src={album} alt="album" />
          <strong>Profesor: </strong>
          <span>{profesor}</span>
        </li>
        <li>
          <ButtonPrimary 
              type="Ver_tutorial" 
              to={`/tutorials/${id}`} 
              
              /> {/* llamada a BP para Tutoriales */}
        </li>
      </ul>
    </Paper>
  </Grid>
 );

};

export default Track;



