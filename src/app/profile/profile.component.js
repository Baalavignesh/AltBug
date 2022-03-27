import {
  Container,
  Divider,
  Grid,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import NavbarMain from "../welcome/navbar/navbarmain.component";

import { makeStyles } from "@mui/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LogoutIcon from "@mui/icons-material/Logout";

import profileStyles from "./profile.styles";
import axios from "axios";
import apiEndpoint from "../../common/common";

import { reactLocalStorage } from "reactjs-localstorage";
import EditProfile from "./EditProfile";
import Details from "./Details";

const drawerWidth = 240;
let useStyles = makeStyles(profileStyles);

export default function Profile() {
  let [userData, setUserData] = useState();

  let [loading, setLoading] = useState(true);

  useState(() => {
    let username = reactLocalStorage.get("username");
    let authToken = reactLocalStorage.get("authToken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    axios
      .get(`${apiEndpoint}/user/${username}`, config)
      .then((res) => {
        console.log(res.data[0]);
        setUserData(res.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  });

  let classes = useStyles();
  return (
    <div>
      <NavbarMain />
      <Container>
        <p className="bigHeading">Settings</p>
        <Divider></Divider>
        {loading ? (
          <div></div>
        ) : (
          <Grid container>
            <Grid item lg={3}>
              <List>
                {["Profile", "Settings"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                <ListItem button key={"Logout"}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Logout"} />
                </ListItem>
              </List>
            </Grid>
            <Grid item lg={9}>
              <EditProfile data={userData} />
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
}
