import React, { useState } from 'react';

export default function Toggle({ onChange }) {
	const [state, setState] = useState(false);

	function onClick() {
		const newState = !state;
		setState(newState);
		onChange(newState);
		// En el momento en que se ha envia al onchange el state no se ha actualizado, por eso le enviamos el valor contrario
	}
	return (
		<button
			/* AIXÍ HO FAN A LA DOCU, PERO ES MILLOR DE L'ALTRE FORMA
             		onClick={() => {
				setState((previosState) => !previosState);
				onChange(!state);
				// En el momento en que se ha envia al onchange el state no se ha actualizado, por eso le enviamos el valor contrario
			}} */
			onClick={onClick}
			data-testid="toogle"
		>
			{state === true ? 'Turn off' : 'Turn on'}
		</button>
	);
}
