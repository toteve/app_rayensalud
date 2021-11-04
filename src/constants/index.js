//const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
//const api_key="&apikey=49fccf44c19c893e5c828c4afe664d76";

// const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
// const base_url = "https://api.musixmatch.com/ws/1.1/";

// definimos la url base a consumir 
const base_url = "https://rayentutorialtestapp.azurewebsites.net/";


// const chart_tracks_get = "chart.tracks.get?chart_name=top&page=1&page_size=10&f_has_lyrics=1";
// definir lo requerido para consultar todos los tutoriales
const chart_tracks_get = "tutorials";

// const track_search = "track.search?q_track=";
// definir lo requerido para consultar un tutorial por nombre del tutorial o descripcion
const track_search = "tutorial?description=";
//const track_search_params="&page=1&page_size=10&f_has_lyrics=1&s_track_rating=desc";

// definir lo requerido para borrar todos los tutoriales
const delete_alltracks = "deletetutorials";

// definir ruta para ubicar un tutorial por su id
//const track_get="track.get?commontrack_id=";
const track_get="tutorials/";

// definir ruta para actualizar un tutorial por su id
const track_update = "updatetutorial/";



//const tracks_lyrics_get="track.lyrics.get?commontrack_id=";
// const track_get="track.get?commontrack_id=";



// esta linea viene desde SongContext.js
// import { chartTracksGet, trackSearch } from "./../constants";

//export const chartTracksGet = () => `${ cors_anywhere }${base_url}${ chart_tracks_get }${ api_key }`;

// exportar las diferentes rutas a usar con get, post, delete y put en tracks

export const chartTracksGet = () => `${base_url}${ chart_tracks_get }`;

export const trackSearch = (q_track) => `${base_url}${ track_search }${ q_track  }`;

export const deleteAlltracks = () => `${base_url}${ delete_alltracks }`;

export const trackGet = (commontrack_id) => `${ base_url }${ track_get }${ commontrack_id }`;

export const trackUpdate = (commontrack_id) => `${ base_url }${ track_update }${ commontrack_id }`;


// export const trackGet = (commontrack_id) => `${ cors_anywhere }${ base_url }${ track_get }${ commontrack_id }${ api_key }`;

// exportar las diferentes rutas a usar con get, post, delete y put en tracks y lyrics




console.log("Const chartTracksGet su valor en constants.js:",chartTracksGet);

console.log("Const trackSearch su valor en constants.js:",trackSearch);

console.log("Const delete_alltracks su valor en constants.js:",deleteAlltracks);

console.log("Const trackGet su valor en constants.js:",trackGet);

console.log("Const trackUpdate su valor en constants.js:",trackUpdate);


// export const trackLyricsGet = (commontrack_id) => `${ cors_anywhere }${base_url}${ tracks_lyrics_get }${ commontrack_id }${ api_key }`;

// export const trackGet = (commontrack_id) => `${ cors_anywhere }${ base_url }${ track_get }${commontrack_id  }${ api_key }`;

