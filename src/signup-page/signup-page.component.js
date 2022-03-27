import React, { useState } from "react";
import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Grid,
  TextField,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

import styles from "./signup-page.styles.js";
import MyButton from "../common/components/button/button.component.js";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

const useStyles = makeStyles(styles);

function SignUpPage() {
  const classes = useStyles();

  let [registerInfo, setRegisterInfo] = useState({
    name: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let [showPassword, setShowPassword] = useState(false);

  let [raiseError, setRaiseError] = useState(false);
  let [submitFailed, setSubmitFailed] = useState(false);

  let handleInput = (props) => (event) => {
    setRegisterInfo({ ...registerInfo, [props]: event.target.value });
  };

  let handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  let handleSignup = () => {
    if (
      registerInfo.password === registerInfo.confirmPassword &&
      registerInfo.name !== "" &&
      registerInfo.userName !== "" &&
      registerInfo.email !== ""
    ) {
      // Backend Part
      //Send data to backend to create account
      console.log(registerInfo);

      axios
        .post(
          "https://slonners.herokuapp.com/signup",
            registerInfo,
        )
        .then((res) => {
          console.log(res);

          setRaiseError(false);
        })
        .catch((err) => {
          console.log(err);
          setRaiseError(true);
        });
    } else {
      setRaiseError(true);
    }
  };

  return (
    <div>
      <Grid container className={classes.signuppage}>
        <Grid item lg={4} xs={12} className={classes.signupsummary}>
          <p className="bigHeading">
            {" "}
            Login to ask questions or answer questions and earn rewards
          </p>
        </Grid>
        <Grid item lg={8} xs={12} className={classes.signupform}>
          <Container>
            <div className="signup-container">
              <div className="signup-info">
                <p className="bigHeading">Register</p>
                <p className="medHeading">
                  Register to join the greatest student community
                </p>
                <p className="">
                  By joining us you can access all questions and earn rewards by
                  helping other people
                </p>
              </div>

              <FormControl style={{ padding: "2rem" }}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    lg={6}
                    className={classes.registerTextfield}
                  >
                    <TextField
                      error={registerInfo.name === "" && raiseError}
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      value={registerInfo.name}
                      onChange={handleInput("name")}
                      helperText={
                        registerInfo.name === "" &&
                        raiseError &&
                        "Field Required"
                      }
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={6}
                    className={classes.registerTextfield}
                  >
                    <TextField
                      error={registerInfo.userName === "" && raiseError}
                      id="outlined-basic"
                      label="Username"
                      variant="outlined"
                      value={registerInfo.userName}
                      onChange={handleInput("userName")}
                      helperText={raiseError && "Field Required"}
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    lg={6}
                    className={classes.registerTextfield}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Phone Number"
                      variant="outlined"
                      value={registerInfo.phoneNumber}
                      onChange={handleInput("phoneNumber")}
                      fullWidth
                      type={"number"}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    lg={6}
                    className={classes.registerTextfield}
                  >
                    <TextField
                      error={registerInfo.email === "" && raiseError}
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      value={registerInfo.email}
                      onChange={handleInput("email")}
                      helperText={raiseError && "Field Required"}
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    lg={6}
                    className={classes.registerTextfield}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      onChange={handleInput("password")}
                      type={showPassword ? "text" : "password"}
                      value={registerInfo.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword} edge="end">
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    lg={6}
                    className={classes.registerTextfield}
                  >
                    <TextField
                      error={
                        registerInfo.password !==
                          registerInfo.confirmPassword && raiseError
                      }
                      id="outlined-basic"
                      label="Confirm Password"
                      variant="outlined"
                      onChange={handleInput("confirmPassword")}
                      type={showPassword ? "text" : "password"}
                      value={registerInfo.confirmPassword}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword} edge="end">
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      helperText={raiseError && "Password did not match"}
                      fullWidth
                      required
                    />
                  </Grid>
                </Grid>
                <FormControlLabel
                  control={<Checkbox />}
                  style={{ paddingTop: "1rem" }}
                  label="I agree to all the Terms, Privacy Policy"
                />
              </FormControl>

              <p style={{ padding: "1rem" }}>
                Already have an account?{" "}
                <Link style={{ textDecoration: "none" }} to={"/login"}>
                  Login
                </Link>
              </p>
              <MyButton buttonName="Signup" onClick={handleSignup} />
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignUpPage;
