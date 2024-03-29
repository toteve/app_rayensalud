
import React, { createContext, useState, useEffect } from "react";

// importa las rutas que se visitaran para las liricas
// import { trackGet, trackUpdate } from "./../constants";
import { trackGet, trackUpdate  } from "./../constants";

// exporta una parte qu es la const que crea el contexto
export const FormContext = createContext();

// exporta una parte qu es la const que define el contexto de las liricas
const FormContextProvider = ({ children }) => {

  console.log("valor de window.location.pathname ", window.location.pathname);
  console.log("valor de window.location.pathname.split: ", window.location.pathname.split("/"));
  
  // asigna un valor a id
  const commontrack_id = window.location.pathname.split("/")[2];

  console.log("valor de commontrack_id en FormContextProvider: ", commontrack_id);

  // define los estados iniciales de la componente de Form
  const [doneFetchTrack, setDoneFetchTrack] = useState(false);
  const [track, setTrack] = useState([]);
  const [type1, setType1] = useState("");

  
  // use effect para leer el tutorial seleccionado sobre la que se hizo clic
  // useEffect( () => getTrack(commontrack_id), [commontrack_id]);

  console.log("Valor de Track actualizado en GetTrack antes de useEffect: ", track);
  useEffect( () => getTrack(commontrack_id), [commontrack_id]);
  

  

  // funcion constante tipo flecha que recibe un id y procede a buscar ese tutorial segun su ID
  const getTrack = (commontrack_id) => {
    console.log("Const trackGet su valor como funcion en el contexto:",trackGet(commontrack_id));

    fetch(trackGet(commontrack_id))
      .then((res) => res.json())
      .then((data) => {
        var body = data;
        console.log("Valor de data en getTrack:",data);
        console.log("Valor de body en getTrack:",body);

        setDoneFetchTrack(true);
        setType1("Ver_tutorial");
        
        !Array.isArray(body) && setTrack(body);
        
      })
      .catch((err) => console.log(err));
  };

  // funcion constante tipo flecha que recibe un id y procede a buscar LA LIRICA de la PISTA segun su ID
  const updateTrack = (commontrack_id, c1, c2, c3, c4 ) => {
    console.log("Const trackUpdate su valor como funcion en el contexto:",trackUpdate(commontrack_id));

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({c1, c2, c3, c4})
    }; 
    fetch(trackUpdate(commontrack_id),requestOptions)
      .then((res) => res.json())
      .then((data) => {
        var body = data;
        console.log("Valor de data en updateTracks:",data);
        console.log("Valor de body en updateTracks:",body);
        
        setDoneFetchTrack(true);
        !Array.isArray(body) && setTrack(body);
        
      })
      .catch((err) => console.log(err));
  }; 

  // return de FormContextProvider donde se definen las componentes y funciones a las que pueden
  // tener acceso las componentes hijos
  return (
    <FormContext.Provider
      /* value={{ doneFetchTrack, doneFetchLyrics, track }} */
      value={{ doneFetchTrack, track, type1, updateTrack  }}
    >
      {children}
    </FormContext.Provider>
  );
};

// exportamos esta constante
export default FormContextProvider;
