import React, { useEffect, useState } from "react";
import { TextField, Typography } from "@mui/material";

import "../styles/index.css";

function Details({ passTop }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");

  const [counter, setCounter] = useState(1024);

  useEffect(() => {
    let count = 0;
    for (var i = 0; i < bio.length; i++) {
      if (bio[i] === " " || bio[i] === "\n") {
        count += 1;
      }
    }
    setCounter(1024 - count);
  }, [bio]);

  useEffect(() => {
    // passTop({ name: name, location: location, bio: bio });
  }, [name, location, bio]);

  return (
    <div className="detailSection">
      <div className="inputSection">
        <Typography className="inputHead">Name*</Typography>
        <TextField
          className="textField"
          size="small"
          variant="outlined"
          helperText="We're big on real names around here, so people know who's who"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="inputSection">
        <Typography className="inputHead">Location</Typography>
        <TextField
          className="textField"
          size="small"
          variant="outlined"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>
      <div className="inputSection">
        <div className="bioText">
          <Typography className="inputHead">Bio</Typography>
          <Typography variant="caption" style={{ color: "#767579" }}>
            {counter}
          </Typography>
        </div>
        <TextField
          className="textField"
          multiline
          size="large"
          variant="outlined"
          helperText="Brief Description for your profile. URLs are hyperlinked"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
        />
      </div>
    </div>
  );
}

export default Details;
