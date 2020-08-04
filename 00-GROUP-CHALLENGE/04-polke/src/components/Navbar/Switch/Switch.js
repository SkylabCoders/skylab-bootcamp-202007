import React from 'react';
import './Switch.css';

let switchElem = document.getElementsByClassName('custom-control-input');
console.log(switchElem);

function changeSwitch(event) {
	switchElem = document.getElementsByClassName('custom-control-input');

	console.log(switchElem.customSwitches.checked);
}

function Switch() {
	return (
		<div className="switch">
			<img src={require('../../../assets/img/sun.png')} alt="sun" />
			<div className="custom-control custom-switch">
				<input
					type="checkbox"
					className="custom-control-input"
					id="customSwitches"
					onChange={changeSwitch}
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
