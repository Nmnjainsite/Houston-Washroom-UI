import { Typography, TextField, Button } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PageTwo = ({ onButtonClick }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [age2, setAge2] = React.useState("");

  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };

  const [age3, setAge3] = React.useState("");

  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };
  return (
    <div style={{ margin: "1rem" }}>
      <p>
        {" "}
        <Typography>Street Address</Typography>
      </p>

      <TextField
        autoComplete="address"
        name="address"
        required
        id="address"
        label="ADDRESS"
        fullWidth
        autoFocus
      />
      <p>
        {" "}
        <Typography>Property Type</Typography>
      </p>
      <FormControl fullWidth sx={{ minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">Residential</MenuItem>
          <MenuItem value={10}>Commercial</MenuItem>
          <MenuItem value={20}>Multi Unit</MenuItem>
        </Select>
      </FormControl>
      <p>
        <Typography>What's Your Timeframe?</Typography>
      </p>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age2}
          onChange={handleChange2}
          autoWidth
          label="Age2"
        >
          <MenuItem value={10}>Immediately</MenuItem>
          <MenuItem value={20}>1 Week</MenuItem>
          <MenuItem value={30}>1-2 Week</MenuItem>
          <MenuItem value={40}>Over 2 Weeks</MenuItem>
        </Select>
      </FormControl>
      <p>
        <Typography>Are You the Owner?</Typography>
      </p>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age3}
          onChange={handleChange3}
          autoWidth
          label="Age3"
        >
          <MenuItem value={10} fullWidth>
            Yes
          </MenuItem>
          <MenuItem value={20} fullWidth>
            No
          </MenuItem>
        </Select>
      </FormControl>
      <p>
        <Button
          variant="contained"
          onClick={() => onButtonClick("pageone")}
          sx={{ width: "48%", background: "#fb923c" }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={() => onButtonClick("pagethree")}
          sx={{ width: "48%", ml: 1, background: "#fb923c" }}
        >
          Next
        </Button>
      </p>
    </div>
  );
};

export default PageTwo;
