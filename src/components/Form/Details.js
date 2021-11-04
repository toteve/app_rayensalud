import React, { useState, useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

import { FormContext } from "../../contexts/FormContext";

// {track}, type1
const Details = ({track}) => {
    const { id, nombre, profesor, materia, fecha } = track;
    const { type1 } = useContext(FormContext);

    var valor1 = true;

    
    console.log("Valor de type1 en Detail.js traido del contextlyrics: ", type1);
 
    type1 === "Ver_tutorial" ? valor1 = true : valor1 = false;

    // defino estado inicial al editar
    // const [track, setTrack] = useState(track);
    const [campo1, setNombre] = useState(nombre);
    const [campo2, setProfesor] = useState(profesor);
    const [campo3, setMateria] = useState(materia);
    const [campo4, setFecha] = useState(fecha);

    console.log("Valor de type1 en details.js: ", type1);
    console.log("Valor de Track en DETAIL.JS al entrar: ", track);


    // Funciones de Actualizacion
    
    const updateCampo1 = (e) => {
        setNombre(e.target.value);
        console.log("valor de e.target.name en Update Campo1: ", e.target.name);
        console.log("valor de e.target.value en Update Campo1: ", e.target.value);
    }
    
    const updateCampo2 = (e) => {
        setProfesor(e.target.value);
        console.log("valor de e.target.name en Update Campo2: ", e.target.name);
        console.log("valor de e.target.value en Update Campo2: ", e.target.value);
    }

    const updateCampo3 = (e) => {
        setMateria(e.target.value);
        console.log("valor de e.target.name en Update Campo3: ", e.target.name);
        console.log("valor de e.target.value en Update Campo3: ", e.target.value);
    }
    
    const updateCampo4 = (e) => {
        setFecha(e.target.value);
        console.log("valor de e.target.name en Update Campo4: ", e.target.name);
        console.log("valor de e.target.value en Update Campo4: ", e.target.value);
    }
  
  
    // const updateNewTaskValue = (e) => setNewTaskName(e.target.value);

     /* function changeField(e) {
        const  { value, name } = e.target;
        console.log("Valor de Track antes de actualizar: ", track);
        console.log("Valor del evento (e) CHANGEfIELD: ", e);
        console.log("Valor del evento (e.target) CHANGEfIELD: ", e.target);
        console.log("Valor de name en changeField: ",name);
        console.log("Valor de value en changeField: ",value);

        // [name] = value;
        
        setTrack({[name]: value});
        //this.setState({ [name]: value });
        console.log("Valor de Track despues de actualizar: ", track); 
    } */
    



    return (
        <Paper className="paper defaultPaper">


            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div style={{ width: '100%', marginBottom: 12 }}>
                    <TextField

                        disabled={valor1}
                        id="outlined-basic"
                        name="nombre"
                        label="Titulo"
                        value={campo1}
                        variant="outlined"
                        onChange={updateCampo1}
                    />
                </div>

                {/* {console.log("Valor textfield Titulo: ", TextField.getValue)} */}

                <div style={{ width: '100%', marginBottom: 12 }}>
                    <TextField
                        disabled={valor1}
                        id="outlined-basic"
                        label="Profesor"
                        name="profesor"
                        value={campo2}
                        variant="outlined"
                        onChange={updateCampo2}
                    />
                </div>

                <div style={{ width: '100%', marginBottom: 12 }}>
                    <TextField

                        disabled= {valor1}
                        id="outlined-basic"
                        label="Materia"
                        name="materia"
                        value={campo3}
                        variant="outlined"
                        onChange={updateCampo3}
                    />
                </div>

                <div style={{ width: '100%', marginBottom: 12 }}>
                    <TextField

                        disabled={valor1}
                        id="outlined-basic"
                        label="Fecha"
                        name="fecha"
                        value={campo4}
                        variant="outlined"
                        onChange={updateCampo4}
                    />
                </div>

            </Box>

             {/* {console.log("c1 c2 c3 c4: ", campo1, campo2, campo3, campo4)}   
             {track={id, campo1, campo2, campo3, campo4}} */}
        </Paper>
    );
};

export default Details;
