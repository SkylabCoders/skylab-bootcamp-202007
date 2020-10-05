import React, { useState } from 'react';

export default function Toggle({ onChange }) {
	const [state, setState] = useState(false);

	return (
		<button
			data-testid="toggle"
			onClick={() => {
				setState((previousState) => !previousState);
				onChange(!state);
			}}
		>
			{state ? 'Turn off' : 'Turn on'}
		</button>
	);
}
