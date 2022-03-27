import { Container } from "@mui/material";
import React from "react";
import "./footer.styles.css";

function Footer() {
  return (
    <div className="footer-main">
      <Container>
        <p style={{ textAlign: "center", padding: "1rem" }}>Content Here</p>
        <hr style={{ width: "90%", color: "#666", outlineStyle: "none" }}></hr>
        <div className="footer-below">
          <p>© Copyright 2020, AltBug Inc.</p>
          <p>An Internet Company</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
