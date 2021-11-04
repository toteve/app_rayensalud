// importamos el useContext
import React, { Fragment, useContext } from "react";

// importamos solo la parte de export const SongsContext de SongContext.js
import { TutorsContext } from "./../../contexts/TutorsContext";

// importamos componentes hermamas de Songs, para realizar operaciones necesarias
// usando mucho de Material UI
import SearchTracks from "./SearchTracks";
import Tracks from "./Tracks";

// Importamos aqui componentes comunes a utilizar, usando mucho de Material UI
import ProgressBar from "./../Common/ProgressBar";
import Message from "./../Common/Message";

// este index.js dentro de carpeta SONGS, tiene la construccion del componente Songs de tipo const
// con funcion flecha con llaves que usan Return y export default
const Tutors = () => {

  // defines que elementos del Contexto de SongsContext vas a utilizar
  const { getTopTracks, validateQTrack, deleteTracks, doneFetch, tracks, text } = useContext(TutorsContext);

  // return del componente Songs usando llamados a componentes funcionales y componentes de 
  // Material UI
  // A revisar bien el funcionamiento de SearchTracks y Tracks
  return (
    <Fragment>

      <SearchTracks 
          validateQTrack={validateQTrack} 
          getTopTracks={getTopTracks}
          deleteTracks={deleteTracks}
          tracks={tracks}
          valor={true}/>

      {doneFetch ? (
        tracks.length ? (
          <Tracks text={text} tracks={tracks} />
        ) : (
          <Message text={text} />
        )
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

export default Tutors;
