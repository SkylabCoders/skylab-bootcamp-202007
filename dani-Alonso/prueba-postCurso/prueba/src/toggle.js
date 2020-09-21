import React, { useState } from 'react';

export default function Toggle({ onChange }) {
	const [state, setState] = useState(false);
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
