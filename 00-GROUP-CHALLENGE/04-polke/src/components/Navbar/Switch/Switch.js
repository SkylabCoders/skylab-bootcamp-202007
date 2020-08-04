import React from 'react';
import './Switch.css';
import { loadDarkColors } from '../../../actions/navbarActions';

let switchElem = document.getElementsByClassName('custom-control-input');
console.log(switchElem);

function changeSwitch(event) {
	switchElem = document.getElementsByClassName('custom-control-input');

	console.log(switchElem.customSwitches.checked);
}

function Switch() {
	function handleChange() {}

	return (
		<div className="switch">
			<img src={require('../../../assets/img/sun.png')} alt="sun" />
			<div className="custom-control custom-switch">
				<input
					type="checkbox"
					className="custom-control-input"
					id="customSwitches"
<<<<<<< HEAD
					onChange={handleChange}
=======
					onChange={changeSwitch}
>>>>>>> 0cea66606f51a2319c272e2f69ec7ceacac5dfed
					readOnly
				/>
				<label
					className="custom-control-label	"
					htmlFor="customSwitches"
				></label>
			</div>
			<img src={require('../../../assets/img/moon.png')} alt="moon" />
		</div>
	);
}
export default Switch;
