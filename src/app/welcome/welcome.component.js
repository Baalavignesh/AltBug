import React, { useEffect, useState } from "react";
import NavbarMain from "./navbar/navbarmain.component";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ActiveTab from "./tabs/active.component";
import InactiveTab from "./tabs/inactive.component";
import { Grid, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "./welcome.styles";
import { useNavigate } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import axios from "axios";
import apiEndpoint from "../../common/common";
import MyTab from "./tabs/mythreads.component";

const useStyles = makeStyles(styles);

function WelcomePage() {
  let [tabValue, setTabValue] = useState("2");
  let [username, setUsername] = useState("");
  let [authToken, setAuthToken] = useState("");
  let [questionData, setQuestionData] = useState([]);

  let [loading, setLoading] = useState(true);

  let [tabData, setTabData] = useState();

  const classes = useStyles();
  const navigate = useNavigate();

  let handleChange = (event, newVal) => {
    setTabValue(newVal);
  };

  useEffect(() => {
    console.log(loading);





    let getDataFunction = async () => {
      // setAuthToken();
      setUsername(reactLocalStorage.get("username"));

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${reactLocalStorage.get("authToken")}`,
        },
      };
      console.log("get data function called");
      // Active Threads API Hit
      if (tabValue === "1") {
        // axios
        // .get(`${apiEndpoint}/questions`, config)
        // .then((res) => {
        //   console.log(res.data);
        // })
        // .catch((err) => {
        //   console.log(err.response.data);
        // });
      }

      // MY Threads API Hit
      else if (tabValue === "2") {
        console.log("inside");
        console.log(config);
        await axios
          .get(`${apiEndpoint}/questions`, config)
          .then((res) => {
            console.log(`res data ${res.data}`);

            setQuestionData(res.data);

            setTabData(<MyTab data={res.data} />);

          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }

      // setTabData(<MyTab data={questionData} />);
      setLoading(false);
    };

    getDataFunction();

    console.log(questionData);
    console.log(loading);
  }, []);

  return (
    <div>
      <NavbarMain />

      <Grid container spacing={2}>
        <Grid item lg={1.5}></Grid>
        <Grid item lg={8}>
          <div className={classes.tabswithbutton}>
            <Box>
              <Tabs
                value={tabValue}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
              >
                <Tab value="1" label="Active Threads" />
                <Tab value="2" label="My Threads" />
              </Tabs>
            </Box>
            <button
              className="ask-question"
              onClick={() => navigate("/app/askquestion")}
            >
              Ask Question
            </button>
          </div>
          {!loading && tabData}
        </Grid>
        <Grid item lg={2.5}>
          <div className={classes.buytoken}>
            <p className={`${classes.buyheading} bigHeading`}>
              Get your AltBug Tokens Here
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default WelcomePage;
