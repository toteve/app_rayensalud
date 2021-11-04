// lo mas importante a destacar en este App.js son las siguientes cosas:
// 1. importar los 2 grandes contextos Songs(Home) y Lyrics (Formulario)
// 2. Importar las AppBar y Toolbar hay que ver como variar el Mensaje(Titulo)
// 3. Importar los componentes principales Songs(Home) y Lyrics(Formulario)
// 4. Importarar para mostrar UNA PAGINA DE 404
// 5. Importar Un style.css personalizado
// 6. Uso de Router/Switch/Route para definir estructura de llamado a componentes
// 7. Componente App tipo const, con parentesis no necesita Return y usa export default
// 8. Estructura de carpetas:
//    8.1 Assets contiene la carpeta de css (style.css) y carpeta img (requeridas en varias partes)
//    8.2 Contexts se definen los 2 contextos
//    8.3 Constants define rutas web a utilizar
//    8.4 Components los componentes principales hay Commons, Lyrics, Songs y NotFound

/// importamos el useContext
import React from "react";

// importamos solo la parte de export const SongsContext de SongContext.js
//import { SongsContext } from "./contexts/SongsContext";

// uso de Rutas en React
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 

// contexto de songs es una constante exportada parcial dentro de SongsContext.js
import TutorsContextProvider from "./contexts/TutorsContext.js"; 
// contexto de lyrics es una constante exportada parcial dentro de LyricsContext.js
import FormContextProvider from "./contexts/FormContext.js"; 

// cabecera es un componente tipo const exportada completa desde Header.js
import Header from "./components/Common/Header.js"; // cabecera

// carpeta completa busca un Index.js que es el arranque de cada compnente 
import Tutors from "./components/Tutors";   // carpeta completa
import Form from "./components/Form"; // carpeta completa

// cabecera es un componente tipo const exportada completa desde index.js dentro de NotFound carpeta
import NotFound from "./components/NotFound/index.js"; // pagina not found

import "./assets/css/styles.css"; // archivo personalizado de css

// componente App primero evaluar Header, 
// seguido SongsContextProvider y Songs,
// luego LyricsContextProvider y Lyrics,
// finalmente el NotFOUND

/* const { text, tracks } = useContext(SongsContext); 
console.log("valor de text: ", text);
console.log("valor de text: ", tracks); */

const App = () => { 
  
const num = 1;
  
return (
  <Router>
      {/* <Header topbar="Tutoriales disponibles en la Web" />  */}
    <Switch>
      <Route exact path="/">
        <Header topbar="Tutoriales disponibles en la Web" /> 
        <TutorsContextProvider>
          <Tutors />
        </TutorsContextProvider>
      </Route>

      <Route path="/tutorials/:commontrack_id">
        <Header topbar="Detalles Tutorial seleccionado" />
        <FormContextProvider>
          <Form />
        </FormContextProvider>
      </Route>
      
      <Route path="/updatetutorial/:commontrack_id">
        <Header topbar="Modificar Tutorial seleccionado" />
        <FormContextProvider>
          <Form />
        </FormContextProvider>
      </Route>
      <Route component={NotFound} />
    </Switch>
  </Router>
);

}

export default App;

