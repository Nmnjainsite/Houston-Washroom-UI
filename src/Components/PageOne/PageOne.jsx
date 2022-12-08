import { Typography, TextField, Button } from "@mui/material";
import React from "react";
import washroom from "../../assets/washroom.svg";
import "./PageOne.css";
const PageOne = ({ onButtonClick }) => {
  return (
    <div>
      <Typography style={{ margin: "1rem" }}>
        What type of service do you need?
      </Typography>
      <div className="bath-img">
        <span>
          {" "}
          <img src={washroom} className="washroom-img" alt="" />
          <p className="washroom-typography">New Tub Installation </p>
        </span>
        <span>
          {" "}
          <img src={washroom} className="washroom-img" alt="" />
          <p className="washroom-typography">Bath/Shower Updates </p>
        </span>
        <span>
          {" "}
          <img src={washroom} className="washroom-img" alt="" />
          <p className="washroom-typography">Bath Linear /Shower Enclosure </p>
        </span>
        <span>
          {" "}
          <img src={washroom} className="washroom-img" alt="" />
          <p className="washroom-typography">Walk In Shower </p>
        </span>
        <span>
          {" "}
          <img src={washroom} className="washroom-img" alt="" />
          <p className="washroom-typography">Full Bathroom Remodel </p>
        </span>
      </div>
      <div style={{ margin: "1rem" }}>
        {" "}
        <Typography>Where will this project take place?</Typography>
        <p>
          {" "}
          <TextField
            autoComplete="zip-code"
            name="zip-code"
            required
            id="zip-code"
            label="ZIP CODE"
            type="number"
            fullWidth
            autoFocus
          />
        </p>
        <div>
          {" "}
          <Button
            onClick={() => onButtonClick("pagetwo")}
            variant="contained"
            fullWidth
            className="btn-main"
            sx={{ background: "#fb923c" }}
          >
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
