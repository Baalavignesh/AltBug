import { Autocomplete, Container, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import NavbarMain from "../welcome/navbar/navbarmain.component";
import styles from "./askquestion.styles";
import allTags from "../../common/allTags.js";
import MyButton from "../../common/components/button/button.component";
import { reactLocalStorage } from "reactjs-localstorage";
import axios from "axios";
import apiEndpoint from "../../common/common";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(styles);

function AskQuestion() {
  const classes = useStyles();

  const navigate = useNavigate();
  let [questionData, setQuestionData] = useState({
    title: "",
    body: "",
    tags: [],
  });

  let [authToken, setAuthToken] = useState("");
  let [username, setUsername] = useState("");

  useEffect(() => {
    setAuthToken(reactLocalStorage.get("authToken"));
    setUsername(reactLocalStorage.get("username"));
  });

  let postQuestion = () => {
    // Logic Comes here Brrr
    console.log(questionData);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    console.log(config);
    axios
      .post(`${apiEndpoint}/question/ask`, questionData, config)
      .then((res) => {
        console.log(res.data);
        navigate("/app")
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  let handleInput = (props) => (event) => {
    console.log(event.target.value);
    setQuestionData({ ...questionData, [props]: event.target.value });
  };

  return (
    <div>
      <NavbarMain />
      <Container>
        {/* <form> */}
        <Grid
          container
          flexDirection="column"
          spacing={1}
          justifyContent="center"
          // alignItems={"center"}
        >
          <Grid item lg={12}>
            <h6
              className="bigHeading"
              style={{ marginTop: "3rem", marginBottom: "2rem" }}
            >
              Ask a public question
            </h6>
          </Grid>
          <Grid item lg={12}>
            <h6 className="medHeading">Question</h6>
            <h6 className="miniDescription">
              Enter your question in short for others to understand at a glance
            </h6>
            <TextField
              fullWidth
              id="outlined-textarea"
              label=""
              // value={questionData.title}
              onChange={handleInput("title")}
              placeholder="Question"
              value={questionData.title}
              multiline
            />
          </Grid>
          <Grid item lg={12}>
            <h6 className={`medHeading ${classes.inputHeading}`}>Answer</h6>
            <h6 className="miniDescription">
              Give proper description on what the problem is and what you have
              tried
            </h6>
            <TextField
              fullWidth
              id="outlined-textarea"
              placeholder="Description"
              label=""
              value={questionData.body}
              onChange={handleInput("body")}
              multiline
            />
          </Grid>
          <Grid item lg={12}>
            <h6 className={`medHeading ${classes.inputHeading}`}>Tags</h6>
            <h6 className="miniDescription">
              Enter all the tags of the technologies used
            </h6>

            <Autocomplete
              multiple
              id="tags-outlined"
              options={allTags}
              getOptionLabel={(option) => option.tag}
              onChange={(event, value) => {
                let data = value.map((val) => {
                  return val.tag;
                });

                setQuestionData({ ...questionData, ["tags"]: data });
              }}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  label=""
                  value={questionData.tags}
                  placeholder="Technologies Used"
                />
              )}
            />
          </Grid>

          <Grid item>
            <div style={{ marginTop: "1rem" }}>
              <MyButton
                onClick={postQuestion}
                buttonName="Post Question"
                fontWeight="500"
              />
            </div>
          </Grid>
        </Grid>
        {/* </form> */}
      </Container>
    </div>
  );
}

export default AskQuestion;
