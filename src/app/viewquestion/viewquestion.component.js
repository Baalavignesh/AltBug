import { makeStyles } from "@mui/styles";
import React from "react";
import NavbarMain from "../welcome/navbar/navbarmain.component";

let useStyles = makeStyles({});

function ViewQuestion() {
  const classes = useStyles();

  return (
    <div>
      <NavbarMain />
    </div>
  );
}

export default ViewQuestion;
