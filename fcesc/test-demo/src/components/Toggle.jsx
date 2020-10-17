import React, { useState } from "react";

function Toggle({ onChange }) {
  const [state, setState] = useState(false);

  return (
    <button
      onClick={() => {
        setState(previousState => !previousState);
        onChange(!state);
      }}
      data-testid="toggle"
    >
      {state === true ? "Turn off" : "Turn on"}
    </button>
  );
}

export default Toggle;