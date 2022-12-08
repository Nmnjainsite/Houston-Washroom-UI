import { Typography, TextField, Button } from "@mui/material";
import React from "react";

const PageThree = ({ onButtonClick }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <p>
        <Typography>First Name</Typography>
      </p>
      <TextField
        autoComplete="first name"
        name="first name"
        required
        id="first name"
        label="First Name"
        fullWidth
        autoFocus
      />

      <p>
        <Typography>Last Name</Typography>
      </p>
      <TextField
        autoComplete="last name"
        name="last name"
        required
        id="last name"
        label="Last Name"
        fullWidth
        autoFocus
      />

      <p>
        <Typography>Email</Typography>
      </p>
      <TextField
        autoComplete="email"
        name="email"
        required
        id="email"
        label="Email"
        fullWidth
        autoFocus
      />

      <p>
        <Typography>Phone</Typography>
      </p>
      <TextField
        autoComplete="phone"
        name="phone"
        required
        id="phone"
        label="Phone"
        type="number"
        fullWidth
        autoFocus
      />
      <p>
        <small>
          By clicking the submit button below, I hereby agree to and accept the
          following terms and conditions governing my use of the Shared Stories
          function on the mySupport360™ website. I further reaffirm my
          acceptance of the general terms and conditions governing my use of any
          Myriad website (including but not limited to the Support360™ website),
          which general terms and conditions are incorporated herein by
          reference
        </small>
      </p>
      <p>
        <Button
          variant="contained"
          onClick={() => onButtonClick("pagetwo")}
          sx={{ width: "48%", background: "#fb923c" }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={() => onButtonClick("pageone")}
          sx={{ width: "48%", ml: 1, background: "#fb923c" }}
        >
          Next
        </Button>
      </p>
    </div>
  );
};

export default PageThree;
