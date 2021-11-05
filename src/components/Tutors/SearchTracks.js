// importa React y 4 basicas de Material UI, es el archivo Js que pinta el campo de texto, con el boton
// de busqueda y la escucha permanente de lectura de los caracteres escritos en el campo

import React, {useState} from "react";

// importar componentes funcionales de MateriaL UI
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from '@material-ui/core/Fab';

// importar COMPONENTES iconos de Material UI
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from "@material-ui/icons/Search";
import LaptopIcon from "@material-ui/icons/Laptop";
import AddIcon from '@material-ui/icons/Add';

import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


function BasicSelect(getTopTracks) {
  const [orden, setOrden] = useState('');

  const handleChange = (event) => {
    //console.log("Valor antes de actualizar de Orden en el Select: ", orden);
    setOrden(event.target.value);
    console.log("Valor actualizado de e.target.value en el Select: ", event.target.value);
    //console.log("Valor actualizado de Orden en el Select: ", orden);
    if ( event.target.value === "Titulo" ) {
        getTopTracks("nombre");
    }
    else
    {
        getTopTracks("fecha");
    }

  };

  return (
    <Box sx={{ width: 200, height: 50, mt: 0, mb:2 }} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={orden}
          label="Ordenar"
          onChange={handleChange}
        >
          <MenuItem value={"Titulo"}>Titulo</MenuItem>
          <MenuItem value={"Fecha"}>Fecha</MenuItem>          
        </Select>
      </FormControl>
    </Box>
  );
}


const SearchTracks = ({ validateQTrack, getTopTracks, deleteTracks, tracks, valor }) => {
 
  return (
  <Paper className="paper defaultPaper"  >

    <TextField
      id="q_track"
      label="Buscar por Titulo"
      margin="normal"
      variant="outlined"
      onKeyPress={(e) => validateQTrack(e)} // este es el evento que escucha escritura en el campo principal
    />

    {BasicSelect(getTopTracks)}

    {/* evento de click sobre boton de icono de busqueda */}
    {console.log("Valor de tracks.length antes de preguntar para borrar:", tracks.length)}
    
    {/* Para habilitar y deshabilitar el valor para propiedad disabled del boton Eliminart Todos  */}
    {tracks.length ? valor=false : valor=true} 
     
    <Button
      variant="outlined"
      color="primary"
      onClick={() => {
        console.log("Llamado a funcion deleteTracks");
        deleteTracks();
      }}
      startIcon={<DeleteIcon />}
      disabled={valor}
    >
      ELIMINAR TODOS
    </Button> {/*: console.log("No hay registros") } */}



    <Tooltip title="Buscar">
      <IconButton onClick={(e) => validateQTrack(e)}>
        <SearchIcon />
      </IconButton>
    </Tooltip>

    <Tooltip title="Recargar pagina">
      <IconButton onClick={(e) => { getTopTracks("nombre") }}>
        <LaptopIcon />
      </IconButton>
    </Tooltip>

    <Tooltip title="Agregar Tutorial">
      <Fab 
        color="primary"
        size="medium"
        aria-label="add"
        sx = {{position: "absolute", bottom: 16, right: 16}}
        onClick={() => {console.log("Llamado a funcion verDetalles ");}}
      >
        <AddIcon />
      </Fab>
    </Tooltip>  
    
    {/* {BasicSelect(getTopTracks)} */}

  </Paper>
  );

};

export default SearchTracks;
