import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import lyrics from "./../../assets/img/lyrics.png";
import back from "./../../assets/img/back.png";

// lo llama track.js con type="Ver_tutorial" e index.js(Form) con type="Back"
// lo llama index.js(Lyrics) con to="/" y track.js  con to={`/tutorials/${id}`}
const ButtonPrimary = ({ type, to }) => (
  <Link className="buttonPrimary" to={to}>
    {console.log("Valor de type en BP: ", type)}
    {console.log("Valor de to en BP: ", to)}
    <Button variant="contained" color="primary">
      <img
        alt={type === "Ver_tutorial" ? "Ver_tutorial" : "Back"}
        src={type === "Ver_tutorial" ? lyrics : back}
      />
      {type === "Ver_tutorial" ? "Ver_tutorial" : "Go Back"}
    </Button>
  </Link>
);

export default ButtonPrimary;
