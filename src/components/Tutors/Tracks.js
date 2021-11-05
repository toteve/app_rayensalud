// Componente que pinta los detalles de cada uno de los titulos en pantalla, requiere de:
// 1. Fragment de React
// 2. Grid de Material UI
// 3. Track.js que pemite pintar cada elemento (tutorial) individual
// 4. Message componente de uso comun

import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Track from "./Track.js";
import Message from "./../Common/Message.js";


const Tracks = ({ tracks, text }) => (
  <Fragment>

    <Message text={text} />

    <div className="root">

      <Grid container spacing={3} justify="center">
         
          {tracks.map((track) => {
            const { id, nombre, profesor, fecha } = track; 
            
            return (

            <Track
              key={id}
              id={id}
              nombre={nombre}
              profesor={profesor}
              fecha={fecha}
              
            /> 

          );

        })}
      </Grid>

    </div>

  </Fragment>

);

export default Tracks;

