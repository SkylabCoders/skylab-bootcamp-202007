import { func } from 'prop-types';
import React, { useState } from 'react';

export default function Toggle ({ onChange }) {
    const [state, setState] = useState(false);

    return (
        <button onClick={() => {
            // si está true te retorna false y viceversa
            setState(previousState => !previousState);
            // state aún no se ha actualizado
            onChange(!state)
        }}
        data-testid="toggle"
        >
            {state === true ? 'Turn off' : 'Turn on'}   
        </button>
    )
}