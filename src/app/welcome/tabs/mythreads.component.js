import React from "react";
import { makeStyles } from "@mui/styles";
import Question from "./question.component";

const useStyles = makeStyles({
  activetab: {
    marginTop: "2rem",
  },
});

function MyTab(props) {
  console.log(props.data)
  const classes = useStyles();

  return (
    <div className={classes.activetab}>
      {props.data.questions.map((single) => {
        {
          /* console.log(data); */
        }
        return <Question data={single} key={single._id} />;
      })}
    </div>
  );
}

export default MyTab;
