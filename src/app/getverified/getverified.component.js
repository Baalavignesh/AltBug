import { Autocomplete, Container, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import NavbarMain from "../welcome/navbar/navbarmain.component";
import styles from "./getverified.styles";
import MyButton from "../../common/components/button/button.component";
import allTags from "../../common/allTags";

const useStyles = makeStyles(styles);

function GetVerified() {
  const classes = useStyles();

  let [verifiedData, setQuestionData] = useState({
    linkedin: "",
    github: "",
    resume: "",
    tags: [],
  });

  let postQuestion = () => {
    console.log("post verified");
    console.log(verifiedData);
  };

  let handleInput = (props) => (event) => {
    console.log(event.target.value);
    setQuestionData({ ...verifiedData, [props]: event.target.value });
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
              style={{ marginTop: "3rem", marginBottom: "1rem" }}
            >
              Get Verified to Answer Questions
            </h6>
            <h6 className="miniDescription">
              Provide the details below to get verified so you can answer and
              start earning AltBug Tokens
            </h6>
          </Grid>

          <Grid item lg={12}>
            <h6 className={`medHeading ${classes.inputHeading}`}>Tags</h6>
            <h6 className="miniDescription">
              Enter all the name of technologies that you know
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

                setQuestionData({ ...verifiedData, ["tags"]: data });
              }}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  label=""
                  value={verifiedData.tags}
                  placeholder="Technologies Known"
                />
              )}
            />
          </Grid>
          <Grid item lg={12}>
            <h6 className="medHeading">GitHub Url</h6>
            <h6 className="miniDescription">
              Make sure you have repositories with the technologies provided
              above
            </h6>
            <TextField
              fullWidth
              id="outlined-textarea"
              label=""
              onChange={handleInput("github")}
              placeholder="LinkedIn"
            />
          </Grid>
          <Grid item lg={12}>
            <h6 className={`medHeading ${classes.inputHeading}`}>
              LinkedIn Url
            </h6>
            <h6 className="miniDescription">
              Provide your LinkedIn Profile to check for your skill badges
            </h6>
            <TextField
              fullWidth
              id="outlined-textarea"
              placeholder="LinkedIn"
              label=""
              value={verifiedData.body}
              onChange={handleInput("linkedin")}
            />
          </Grid>

          <Grid item>
            <div style={{ marginTop: "1rem" }}>
              <MyButton
                onClick={postQuestion}
                buttonName="Request for Verification"
                fontWeight="500"
                width="auto"
              />
            </div>
          </Grid>
        </Grid>
        {/* </form> */}
      </Container>
    </div>
  );
}

export default GetVerified;
