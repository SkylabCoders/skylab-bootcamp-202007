import React from 'react';
import '../styles/Textinput.css';

function TextInput(props) {
	return (
		<label htmlFor={props.name} className='label'>
			{props.label}:{' '}
			<input
				className='label__input'
				name={props.name}
				type={props.type}
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
			/>
		</label>
	);
}

export default TextInput;
