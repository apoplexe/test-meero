import React, { useRef, useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Select from "@material-ui/core/Select";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  formControl: {
    minWidth: 120
  }
};

const ButtonAppBar = ({ classes, locations, handleLocationChange }) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const inputLabel = useRef(null);
  const handleSelectChange = event => {
    handleLocationChange(event.target.value);
    setCurrentLocation(event.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            The Cat Website
          </Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="select-location">
              Location
            </InputLabel>
            <Select
              value={currentLocation}
              onChange={handleSelectChange}
              input={
                <OutlinedInput
                  labelWidth={
                    inputLabel.current
                      ? ReactDOM.findDOMNode(inputLabel.current).offsetWidth
                      : 120
                  }
                  name="location"
                  id="select-location"
                />
              }
            >
              {locations.map(location => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
