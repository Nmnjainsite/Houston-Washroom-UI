import React from "react";
import { Grid } from "@mui/material";
import {
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import bathroom from ".././assets/bathroom.jpg";
import "./Landing.css";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import MultiStepProgressBar from "../Components/MultiStepProgressBar";
const Landing = () => {
  return (
    <>
      <div className="landing-page-typography">
        {" "}
        <Typography variant="h6" sx={{ color: "#fb923c" }}>
          GET A 100% FREE QUOTE
        </Typography>
        <Typography variant="h4">One-Day Bath Remodels</Typography>
      </div>

      <div className="landing-page">
        <div className="landing-page-col-1">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography>
                Your Dream Bathroom Installed in As Little As 1 Day!
              </Typography>
              <div className="img-container">
                <img src={bathroom} alt="" className="landing-page-img" />
              </div>
              <div style={{ marginTop: "1rem" }}>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineRoundedIcon
                      style={{ color: "#fb923c" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id="switch-list-label-bluetooth"
                    primary="Completely FREE Quote - No Obligations!"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineRoundedIcon
                      style={{ color: "#fb923c" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id="switch-list-label-bluetooth"
                    primary="Full Bathroom Remodels"
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineRoundedIcon
                      style={{ color: "#fb923c" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id="switch-list-label-bluetooth"
                    primary="New Tub Installations"
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineRoundedIcon
                      style={{ color: "#fb923c" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id="switch-list-label-bluetooth"
                    primary="New Shower Installations"
                  />
                </ListItem>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="landing-page-col-2">
          <MultiStepProgressBar />
        </div>
      </div>
    </>
  );
};

export default Landing;
