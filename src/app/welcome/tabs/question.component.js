import { Avatar, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";

const useStyles = makeStyles({
  questionBox: {
    borderBottom: "1px solid black",
    borderRight: "1px solid black",

    // margin: "1rem",
    padding: "8px",
    // borderRadius: "3px",
    // width: "90%",
  },

  questionContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  answernow: {
    all: "unset",
    backgroundColor: "#26272E",
    color: "white",
    padding: "6px 10px",
    borderRadius: "2px",
    fontSize: "14px",
    cursor: "pointer",
  },

  voteArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    justifyItems: "stretch",
    alignItems: "center",
  },

  questionInfo: {
    backgroundColor: "#F6F6F6",
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
  },
  questionButton: {
    backgroundColor: "white",
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    borderRadius: "2px",
    alignItems: "center",
    padding: "6px",
    margin: "6px",
  },
});

function Question(props) {
  console.log(props.data);
  const classes = useStyles();

  return (
    <div className={classes.questionBox} key={props.data._id}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item lg={1}>
          <div className={classes.voteArea}>
            <div style={{ padding: "6px" }}>
              <Avatar>B</Avatar>
            </div>
            <ArrowDropUpIcon fontSize="large" style={{ cursor: "pointer" }} />
            <div>{props.data.upvotes}</div>
            <ArrowDropDownIcon fontSize="large" style={{ cursor: "pointer" }} />
          </div>
        </Grid>

        <Grid item lg={11}>
          <div className="">
            <p className="medHeading">{props.data.title}</p>
            <p className="description">{props.data.body}</p>
          </div>
          <div className={classes.questionInfo}>
            <div
              style={{
                padding: "6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className={classes.buttons}>
                <div className={classes.questionButton}>
                  <CommentIcon
                    style={{ paddingRight: "4px" }}
                    fontSize={"small"}
                  />
                  <span className="miniDescription">
                    {props.data.views} Answer
                  </span>
                </div>
                <div className={classes.questionButton}>
                  <VisibilityIcon
                    style={{ paddingRight: "4px" }}
                    fontSize={"small"}
                  />
                  <span className="miniDescription">
                    {props.data.views} Views
                  </span>
                </div>
              </div>

              <div>
                <button className={classes.answernow}>Answer Now</button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      {/* <hr /> */}
    </div>
  );
}

export default Question;
