// lo mas importante a destacar en este App.js son las siguientes cosas:
// 1. importar los 2 grandes contextos Tutors(Home) y Form(Formulario)
// 2. Importar las AppBar y Toolbar hay que ver como variar el Mensaje(Titulo)
// 3. Importar los componentes principales Tutors(Home) y Form(Formulario)
// 4. Importarar para mostrar UNA PAGINA DE 404
// 5. Importar Un style.css personalizado
// 6. Uso de Router/Switch/Route para definir estructura de llamado a componentes
// 7. Componente App tipo const, con parentesis no necesita Return y usa export default
// 8. Estructura de carpetas:
//    8.1 Assets contiene la carpeta de css (style.css) y carpeta img (requeridas en varias partes)
//    8.2 Contexts se definen los 2 contextos
//    8.3 Constants define rutas web a utilizar
//    8.4 Components los componentes principales hay Commons, Lyrics, Songs y NotFound

/// importamos el react
import {React}  from "react";


// uso de Rutas en React
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 


// contexto de Tutors es una constante exportada  dentro de TutorsContext.js
import TutorsContextProvider from "./contexts/TutorsContext.js"; 

// contexto de Form es una constante exportada  dentro de FormContext.js
import FormContextProvider from "./contexts/FormContext.js"; 

// importamos solo la parte de export const HeaderContext de HeaderContext.js
//import { HeaderContext } from "./contexts/HeaderContext.js";

// cabecera es un componente tipo const exportada completa desde Header.js
import Header from "./components/Common/Header.js"; // cabecera

// importa un Index.js que es el arranque de cada componente en cada carpeta
import Tutors from "./components/Tutors";   
import Form from "./components/Form"; 

// NotFound es un componente tipo const exportada completa desde un index.js dentro de NotFound carpeta
import NotFound from "./components/NotFound/index.js"; // pagina not found

import "./assets/css/styles.css"; // archivo personalizado de css

// componente App primero evaluar Header, 
// seguido TutorsContextProvider y Tutors,
// luego FormContextProvider y Form
// finalmente los componentes de carpeta Common y el index de carpeta constants

const App = () => { 
  
  
  
return (
  <Router>

    <Switch>
      <Route exact path="/">
        <Header topbar={"Tutoriales disponibles en la Web"} />  
        <TutorsContextProvider>
          <Tutors />
        </TutorsContextProvider>
      </Route>

      <Route path="/tutorials/:commontrack_id">
        <Header topbar={"Detalles Tutorial seleccionado"} /> 
        <FormContextProvider>
          <Form  boton = {"Editar tutorial"}/>
        </FormContextProvider>
      </Route>
      
      <Route path="/updatetutorial/:commontrack_id">
        <Header topbar={"Modificar Tutorial seleccionado"} />
        <FormContextProvider>
          <Form boton = {"Modificar tutorial"} />
        </FormContextProvider>
      </Route>

      <Route component={NotFound} />

    </Switch>

  </Router>
);

}

export default App;

