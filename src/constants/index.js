
// definimos la url base a consumir 
const base_url = "https://rayentutorialtestapp.azurewebsites.net/";


// definir lo requerido para consultar todos los tutoriales
const chart_tracks_get = "tutorials";


// definir lo requerido para consultar un tutorial por nombre del tutorial o descripcion
const track_search = "tutorial?description=";


// definir lo requerido para borrar todos los tutoriales
const delete_alltracks = "deletetutorials";

// definir ruta para ubicar un tutorial por su id
const track_get="tutorials/";

// definir ruta para actualizar un tutorial por su id
const track_update = "updatetutorial/";



// exportar las diferentes rutas a usar con get, post, delete y put en tracks

export const chartTracksGet = () => `${base_url}${ chart_tracks_get }`;

export const trackSearch = (q_track) => `${base_url}${ track_search }${ q_track  }`;

export const deleteAlltracks = () => `${base_url}${ delete_alltracks }`;

export const trackGet = (commontrack_id) => `${ base_url }${ track_get }${ commontrack_id }`;

export const trackUpdate = (commontrack_id) => `${ base_url }${ track_update }${ commontrack_id }`;


console.log("Const chartTracksGet su valor en constants.js:",chartTracksGet);

console.log("Const trackSearch su valor en constants.js:",trackSearch);

console.log("Const delete_alltracks su valor en constants.js:",deleteAlltracks);

console.log("Const trackGet su valor en constants.js:",trackGet);

console.log("Const trackUpdate su valor en constants.js:",trackUpdate);




