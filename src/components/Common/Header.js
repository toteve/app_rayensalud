// import de react UseContext
import React  from "react";



// trae estas componentes de Material UI
import { AppBar, Toolbar } from "@material-ui/core"; // trae estas componentes de Material UI
import logo from "./../../assets/img/logo.png";

// INVOCANDO las componentes importadas de Material UI como AppBar y Toolbar
const Header = (props) => {

  
  console.log("Valor de titulo del contexto: ", props.topbar);
  
  return (
  <AppBar position="sticky">
    <Toolbar>
      <img src={logo} alt="logo" width="32" height="32"></img>
      &nbsp;&nbsp;
      <h1>{props.topbar}</h1>
    </Toolbar>
  </AppBar>
);

}

export default Header;



