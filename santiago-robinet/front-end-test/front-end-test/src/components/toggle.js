import React, { useState } from 'react';

export default function Toggle({onchange}) {
	const [state, setState] = useState(false);

	return (
		<button
			onClick={() => {
                setState((previusState) => !previusState);
                onchange(!state)
            }}
            data-testid="toggle"
		>
            {state === true ? 'Turn off' : 'Turn on'}
        </button>
	);
}
