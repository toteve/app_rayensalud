// Actualizar para el contexto de Songs(Home) para el caso de la asignacion enviada

// importar librerias de react a utilizar 
import React, { createContext, useState, useEffect } from "react";

// importar rutas a usar para consultar y buscar
import { chartTracksGet, trackSearch, deleteAlltracks } from "./../constants";

// creation del contexto es una constante exportada 
export const TutorsContext = createContext();

// componente principal con tipo constante con funcion anonima recibiendo los props hijos
// con llaves por tanto requiere Return y usa export default 
const TutorsContextProvider = ({ children }) => {

  // con useState define dentro del contexto los diversos estados necesarios
  const [doneFetch, setDoneFetch] = useState(); // aqui la ruta a ausar
  const [currentQtrack, setCurrentQTrack] = useState(""); // aqui para un valor inicial vacio del campo texto
  const [text, setText] = useState("Top 10 Tutoriales en WEB"); // texto inicial a usar
  const [tracks, setTracks] = useState([]); // arreglo de tracks de SONGS, inicial vacio
  
  
  useEffect(() => {
    getTopTracks("nombre");
  }, []);

  // funcion getTopTracks(), usa la ruta chartTracksGet() importada desde index.js de carpeta constants
  const getTopTracks = (campo) => {
    console.log("Const chartTracksGet su valor como funcion en el contexto:",chartTracksGet());
    setCurrentQTrack(" ");
    //setText("Top 10 Tutoriales en WEB");
    fetch(chartTracksGet())
      .then( (res) => res.json() )
      .then( (data) => {
        setDoneFetch(true); // actualiza estado de ruta
        var track_list  = data;

        
        if (track_list.length > 0)
        {

          if (campo === "nombre") {
           track_list = data.sort(data.nombre);  // ascendente por nombre es default
          }
          else
          {
          track_list = data.reverse(data.fecha); // funciona para ascendente fecha
          }
            
          setText("Top 10 Tutoriales en WEB");
          //setTopbar("Tutoriales Disponibles en la Web"); 
          console.table(track_list);
          setTracks(track_list); // actualiza estado de array de tracks

        }
        else
        {  
          // alert("No hay registros en la Web en getTopTracks......"); 
          setText("Todos los tutoriales han sido eliminados");
          console.table(track_list);
          setTracks(track_list); // actualiza estado de array de tracks
        }  
      })
      .catch((err) => console.log(err) );
  };

  // funcion getTracks(), usa la ruta trackSearch() importada desde index.js de carpeta constants
  const getTracks = (q_track) => {
    console.log("Const trackSearch su valor como funcion en el contexto:",trackSearch(q_track));
    fetch(trackSearch(q_track))
      .then((res) => res.json())
      .then((data) => {
        const track_list = data;
        setDoneFetch(true);
        setText(track_list.length ? "Results" : "No Results");
        setTracks(track_list);
      })
      .catch((err) => console.log(err));
  };

  // esta funcion recibe un evento(e) que es la escritura en la caja de texto que tiene un id=q_track
  // luego toma el valor y realiza una case-sensitive 
  // del tutorial valor: q_track = document.querySelector("#q_track").value.toLowerCase().trim()
  const validateQTrack = (
    e,
    q_track = document.querySelector("#q_track").value.trim()
  ) => {
    console.log("Valor de Q_track en ValidateQtrack: ",q_track);
    console.log("Valor de e.type en ValidateQtrack: ",e.type);
    console.log("Valor de e.key en ValidateQtrack: ",e.key);

    if (e.type === "keypress" && e.key !== "Enter") return;

    const words = q_track.match(/\w+/g);
    console.log("Valor de words en ValidateQtrack: ",words);

    q_track = words && words.join(" ");
    console.log("Valor de Q_track en ValidateQtrack despues de match y join: ",q_track);

    // si q_track tiene valor y es diferente a vacio (currentQtrack)
    if (q_track && q_track !== currentQtrack) {
      setCurrentQTrack(q_track); // actualiza el nuevo valor de q_track a currentQtrack
      setDoneFetch(false); // actualiza el estado de la ruta
      console.log("Valor de Q_track en ValidateQtrack antes de llamar a getTracks(q_track);",q_track);
      getTracks(q_track); // aqui el llamado a getTracks(q_track) con ese parametro
    }
  };

  const deleteTracks = () => {
    
    console.log("Const deleteAlltracks su valor como funcion en el contexto:",deleteAlltracks());
    setCurrentQTrack(" ");
    
    fetch(deleteAlltracks(), { method: 'DELETE' })
      .then( (res) => res.json() )
      .then( (data) => {
        setDoneFetch(true); // actualiza estado de ruta
        var track_list  = data;
        console.log("Valor de data en deleteTracks:",data);
        console.log("Valor de track_list en deleteTracks:",track_list);
        console.table(data);
        setText("Todos los tutoriales han sido eliminados");
        getTopTracks("nombre");
               
        console.table(track_list);
        // setTracks(track_list); // actualiza estado de array de tracks

      })
      .catch((err) => console.log(err));
  };


  const convertir = (fecha) => {

    /* //var fechahoy = new Date();
    var fulldate = new Date(fecha);
  
    console.log("Fecha recibida del ENDPOINT como Datetime: ", fecha);
    //console.log("Fecha de hoy con DATE(): ", fechahoy);
    console.log("Fecha DATETIME convertida con DATE(): ", fulldate);
  
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
  
    console.log("Fecha original: ", fulldate.toLocaleDateString(options));
    //console.log("Fecha convertida: ", fulldate.toLocaleDateString("es-ES", options));
  
    var currentDate = fulldate.toLocaleDateString(options); */
   
  
    var monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  
    console.log("Valor de fecha recibido de Array en funcion: ", fecha);
    var fullDate = new Date(fecha); console.log("Valor de fecha convertido Date", fullDate);
  
    
  
    var twoDigitMonth = (fullDate.getMonth()+1) + "";
    console.log("valor de fullDate.getMonth()+1: ",fullDate.getMonth()+1);
  
    if (twoDigitMonth.length === 1)
      twoDigitMonth = "0" + twoDigitMonth;
  
    var twoDigitDate = (fullDate.getDate()+1) + "";
    console.log("valor de fullDate.getDate()+1 es el dia: ",fullDate.getDate()+1);
  
    if (twoDigitDate.length === 1)
      twoDigitDate = "0" + twoDigitDate;
    // var currentDate = twoDigitDate + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
    
    var mesLetras = monthNames[parseInt(twoDigitMonth,10)-1];
    var currentDate = twoDigitDate + " " + mesLetras + " " + fullDate.getFullYear();
  
    console.log("Fecha convertida: ", currentDate); 
  
  
     return currentDate;
  } 

  //Patron de diseño: Provider

  // Un componente de orden superior (HOC por las siglas en inglés de higher-order component) es una técnica 
  // avanzada en React para el reuso de la lógica de componentes. ... En concreto, un componente de orden 
  // superior es una función que recibe un componente y devuelve un nuevo componente.
  // valor: todos los accesorios que podran ser utilizados por componentes hijos dentro del HOC

  return (
    <TutorsContext.Provider value={{ doneFetch, text, tracks, 
                                    validateQTrack, getTopTracks, deleteTracks, convertir }}>

      {children}

    </TutorsContext.Provider>
  );
};

export default TutorsContextProvider;


