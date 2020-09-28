import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';


function valuetext(value) {
  return `${value}`;
}

export default function InputNumber({ onChange, maxValue }) {
  const [input, setInput] = useState(0);


  function handleChange(event, value) {
    setInput(value);
    onChange(value);
    console.log(input);
  }


  return (
    <Slider
      defaultValue={0}
      getAriaValueText={valuetext}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={1}
      onChange={handleChange}
      marks
      min={0}
      max={maxValue}
    />
  );
}
