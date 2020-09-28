import React, { useState } from 'react';

export default function Toggle({ onChange }) {
	const [state, setState] = useState(false);

	function onClick() {
		setState((previousState) => !previousState);
		onChange(!state);
	}

	return (
		<button onClick={onClick} data-testid="toggle">
			{state === true ? 'Turn off' : 'Turn on'}
		</button>
	);
}
