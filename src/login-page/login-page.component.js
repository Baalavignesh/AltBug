import React, { useState } from "react";
import "./login-page.styles.js";
import {
  Container,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";

import loginStyles from "./login-page.styles";
import { makeStyles } from "@mui/styles";
import MyButton from "../common/components/button/button.component.js";
import { Link } from "react-router-dom";

import PeopleIcon from "@mui/icons-material/People";
import PasswordIcon from "@mui/icons-material/Password";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";

import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(loginStyles);

function LoginPage() {
  const classes = useStyles();

  const navigate = useNavigate();

  let [loginCreds, setLoginCreds] = useState({
    userName: "",
    password: "",
    showPassword: false,
  });

  let handleInput = (props) => (event) => {
    setLoginCreds({ ...loginCreds, [props]: event.target.value });
  };

  let handleLogin = () => {
    console.log(loginCreds);

    axios
      .post("https://slonners.herokuapp.com/login", loginCreds)
      .then((res) => {
        console.log(res.data);
        console.log(res.data["access token"]);
        reactLocalStorage.set("authToken", res.data["access token"]);

        reactLocalStorage.set("username", res.data["userName"]);

        navigate("/app");
      });
  };

  let handleShowPassword = () => {
    setLoginCreds({
      ...loginCreds,
      ["showPassword"]: !loginCreds.showPassword,
    });
  };

  return (
    <div>
      <Grid container className={classes.loginpage}>
        <Grid item lg={4} xs={12} className={classes.loginsummary}>
          <p className="bigHeading">
            {" "}
            Welcome back! People are waiting for your help and answer your
            question 😉
          </p>
        </Grid>
        <Grid item lg={8} xs={12} className={classes.loginform}>
          <Container>
            <div className="login-container">
              <div className="login-info">
                <p className="bigHeading">Login</p>
                <p className="medHeading">Login to learn and earn rewards</p>
              </div>

              <FormControl style={{ padding: "2rem" }}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    lg={12}
                    className={classes.registerTextfield}
                  >
                    <TextField
                      id="userName"
                      label="Username/Email"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PeopleIcon />
                          </InputAdornment>
                        ),
                      }}
                      onChange={handleInput("userName")}
                      fullWidth
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={12}
                    className={classes.registerTextfield}
                  >
                    <TextField
                      id="password"
                      label="Password"
                      variant="outlined"
                      type={loginCreds.showPassword ? "text" : "password"}
                      value={loginCreds.password}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PasswordIcon />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword} edge="end">
                              {loginCreds.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      onChange={handleInput("password")}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </FormControl>

              <p style={{ paddingBottom: "1.5rem" }}>
                New Here?{" "}
                <Link style={{ textDecoration: "none" }} to={"/register"}>
                  Register Now
                </Link>
              </p>
              <MyButton buttonName="Login" onClick={handleLogin} />
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginPage;
