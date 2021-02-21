import React, { useState } from 'react';

export default function Toggle({ onChange }) {
	// {} -> destructuring de props
	const [state, setState] = useState(false);

	// onClick en camelCase porque es un elemento sintetico de React. Es un wrapper del evento onclick de html
	return (
		<button
			onClick={() => {
				setState((previousState) => !previousState);
				onChange(!state);
			}}
			data-testid="toggle"
		>
			{state === true ? 'Turn off' : 'Turn on'}
		</button>
	);
}
