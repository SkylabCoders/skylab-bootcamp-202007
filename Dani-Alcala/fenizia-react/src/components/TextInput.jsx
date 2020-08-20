import React from "react";

function TextInput(props) {
  return (
    <label htmlFor={props.name}>
      <input
        className="input__search"
        name={props.name}
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  );
}

export default TextInput;
