import React from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);


export default function InputBoolean({ onChange }) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup value={value} onChange={handleChange}>
        <FormControlLabel value="true" control={<GreenRadio />} label="SI" />
        <FormControlLabel value="false" control={<Radio />} label="NO" />
      </RadioGroup>
    </FormControl>
  );
}
