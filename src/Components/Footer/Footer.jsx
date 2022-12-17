import React from "react";
import { CopyrightRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
const Footer = () => {
  return (
    <footer
      className="footer-bar"
      style={{
        background: "#262626",
        color: "#ffff",
        textAlign: "center",
        padding: "1rem",
        marginTop: "3rem",
        borderRadius: "0.3rem",
      }}
    >
      <p>
        <Typography>
          All Rights Reserved. You keep all rights to your material. This is by
          far the most commonly used and seen statement of rights in copyrighted
          materials. Some Rights Reserved.
        </Typography>{" "}
      </p>
      <p>
        <span>PRIVACY POLICY </span>{" "}
        <span style={{ marginLeft: "2rem" }}> CONTACT</span>
      </p>
      <p>
        <Typography>
          {" "}
          <CopyrightRounded
            style={{
              color: "#ffff",
              position: "relative",
              top: "0.5rem",
              right: "0.3rem",
            }}
          />
          2022 YOURDREAMBATHROOM.NET
        </Typography>
      </p>
    </footer>
  );
};

export default Footer;
