import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

//Styles
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormInput(props) {
  const classes = useStyles();

  //State

  return (
    <>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">
          {props.name}
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={props.values.amount}
          onChange={props.handleQuantity("quantity")}
          startAdornment={<InputAdornment position="start">✏</InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
    </>
  );
}
