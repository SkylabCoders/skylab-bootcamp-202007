import React from 'react';
import './Switch.css';
// import { loadDarkColors } from '../../../actions/navbarActions';

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
					onChange={handleChange}
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
