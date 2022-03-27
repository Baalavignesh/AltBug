import React from "react";

import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import "./home-page.styles.css";
import { Container, Grid } from "@mui/material";

import { ReactComponent as IntroImg } from "../common/images/homepage.svg";

import featuresData from "./home_data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <Container>
        <Grid container spacing={2} className="intro-div">
          <Grid item lg={6} xs={12}>
            <h1 className="intro-title">
              A Community to Learn and Earn with Ease
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="intro-button">Signup or Login Now</button>
          </Grid>
          <Grid item lg={6} xs={12}>
            <IntroImg className="intro-image" />
          </Grid>
        </Grid>

        <section id="features" className="features">
          <h1 className="feature-title">Amazing Features</h1>
          <p className="feature-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Grid
            container
            spacing={2}
            style={{ marginTop: 30, marginBottom: 60 }}
          >
            {featuresData.map((data, index) => {
              return (
                <Grid item key={index} lg={4} xs={12}>
                  <FontAwesomeIcon className={data.icon} />
                  <h2 className="feature-tile-heading">{data.title}</h2>
                  <FontAwesomeIcon icon="fa-shield" />
                  <p className="feature-tile-content">{data.content}</p>
                </Grid>
              );
            })}
          </Grid>
        </section>
      </Container>

      <Footer />
    </div>
  );
}

export default HomePage;
