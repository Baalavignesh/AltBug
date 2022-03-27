import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import Question from "./question.component";

const useStyles = makeStyles({
  activetab: {
    marginTop: "2rem",
  },
});

function ActiveTab() {
  const classes = useStyles();


  useEffect(() => {

  })

  return (
    <div className={classes.activetab}>
    
      <Question />
      <Question />
    </div>
  );
}

export default ActiveTab;
