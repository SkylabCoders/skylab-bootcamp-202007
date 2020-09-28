import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function CallendarForm(props) {
  // The first commit of Material-UI

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Operation's day"
          format="dd/MM/yyyy"
          value={props.selectedDate}
          onChange={props.handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Operation's hour"
          disabled={true}
          value={props.selectedDate}
          onChange={props.handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change time",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
