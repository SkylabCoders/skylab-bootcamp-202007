import React from 'react';

function TextInput(props) {
	return (
		<label htmlFor={props.name}>
			name:
			<input
				name={props.name}
				type="text"
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
			/>
		</label>
	);
}

export default TextInput;
