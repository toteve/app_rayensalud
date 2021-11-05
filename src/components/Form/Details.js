import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";


import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';

import track1 from "./../../assets/img/track.png";
import album1 from "./../../assets/img/album.png";


import ButtonPrimary from "../Common/ButtonPrimary";

import { FormContext } from "../../contexts/FormContext";

const Details = ({track, boton}) => {
    const { id, nombre, profesor, materia, fecha } = track;
    const { updateTrack } = useContext(FormContext);

    const [valor, setValor] = useState(true);
    const [valor2, setValor2] = useState(true);    
   
    
    console.log("Valor de boton en Detail.js recibido como parametro: ", boton);
    console.log("Valor de track en Detail.js tomado de FormContext: ", track);

    
    // defino estado inicial al editar
    // const [track, setTrack] = useState(track1);
    const [campo1, setNombre] = useState(nombre);
    const [campo2, setProfesor] = useState(profesor);
    const [campo3, setMateria] = useState(materia);
    const [campo4, setFecha] = useState(fecha);


    //function cambio(valor1) { return valor1=false};

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

                        disabled={valor}
                        id="outlined-basic"
                        name="nombre"
                        label="Titulo"
                        value={campo1}
                        variant="outlined"
                        onChange={updateCampo1}
                    />
                </div>

                
                <div style={{ width: '100%', marginBottom: 12 }}>
                    <TextField
                        disabled={valor}
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

                        disabled= {valor}
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

                        disabled={valor}
                        id="outlined-basic"
                        label="Fecha"
                        name="fecha"
                        value={campo4}
                        variant="outlined"
                        onChange={updateCampo4}
                    />
                </div>

            </Box>

             {console.log("c1 c2 c3 c4 e ID: ", campo1, campo2, campo3, campo4, id)}   
             

             <ButtonPrimary type="Back" to="/" /> {/* llamada a BP para retorno al Home */}

                {/* BOTON DE EDITAR TUTORIAL */}
                <Button   
                    variant="outlined"
                    color="primary"
                    onClick={ () => {setValor(false); setValor2(false)} }
                    startIcon= { <EditIcon />  }
                    disabled = {false}          
                >
                    <img alt={"Editar tutorial"} src={track1} />
                  {" Editar tutorial"}

                </Button>
                
                
                
                {/* BOTON DE MODIFICAR TUTORIAL */}
                <Link className="buttonPrimary" to={`/updatetutorial/${track.id}`}>   

                <Button   
                    variant="outlined"
                    color="primary"
                    onClick={ () => { 
                        console.log("Llamado a funcion updateTrack"); 
                        console.log("Valor track antes de llamar a updateTrack: ",track);
                        updateTrack(track.id, campo1, campo2, campo3, campo4); 
                   
                    }}
                    startIcon= { <ClearIcon /> }
                    disabled = {valor2}          
                >
                    <img alt={"Modificar tutorial"} src={album1} />

                  {" Modificar tutorial"}

                </Button>

                </Link>    


        </Paper>
    );
};

export default Details;
