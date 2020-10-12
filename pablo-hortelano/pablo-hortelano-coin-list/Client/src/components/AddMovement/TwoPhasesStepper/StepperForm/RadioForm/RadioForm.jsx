import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioForm(props) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Operation</FormLabel>
      <RadioGroup
        aria-label="operation"
        name="Operation"
        value={props.value}
        onChange={props.handleChange}
      >
        <FormControlLabel value="Buy" control={<Radio />} label="Buy" />
        <FormControlLabel value="Sell" control={<Radio />} label="Sell" />
      </RadioGroup>
    </FormControl>
  );
}
