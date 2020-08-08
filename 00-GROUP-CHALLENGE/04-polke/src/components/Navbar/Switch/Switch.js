import React from 'react';
import './Switch.css';
import '../../../shared/generalStyles.css';

function Switch() {
	var isDarkActive = false;
	// codi obligatori x poder cridar a stylesheet
	var styleEl = document.createElement('style');
	document.head.appendChild(styleEl);
	var styleSheet = styleEl.sheet;
	// insertem la primera rule (light mode)
	styleSheet.insertLightModeRule(
		`:root {--bg-color-navbar: #24292e;
			--bg-color-box: #f8f9fa9f;
			--font-color-footer: #f8f9fa;
			--form-color-headers: #212529;
			--form-color-background: #bec0c5;
			--bg-color-body: #f5f5f5;
			--bg-color-button: #007bff;
			--bg-color-repoCard: #f8f9fa;
			--font-color-repoCard: black;
			--bg-color-repoCard__name-private: #f1f2f3;
			--bg-color-repoCard__details: #f1f2f3;
			--bg-color-user-info-card: #f8f9fa;
			--font-color-user-info-card: black;}`,
		0
	);
	// Functio que mira si esta actiu el darkmode o no, i canvia les regles en funcio d'aixo
	const switchColor = function () {
		if (isDarkActive) {
			isDarkActive = false;
			styleSheet.deleteRule(0);
			styleSheet.insertRule(
				`:root {--bg-color-navbar: #24292e;
					--bg-color-box: #f8f9fa9f;
					--font-color-footer: #f8f9fa;
					--form-color-headers: #212529;
					--form-color-background: #bec0c5;
					--bg-color-body: #f5f5f5;
					--bg-color-button: #007bff;
					--bg-color-repoCard: #f8f9fa;
					--font-color-repoCard: black;
					--bg-color-repoCard__name-private: #f1f2f3;
					--bg-color-repoCard__details: #f1f2f3;
					--bg-color-user-info-card: #f8f9fa;
					--font-color-user-info-card: black;}`,
				0
			);
		} else {
			styleSheet.deleteRule(0);
			styleSheet.insertRule(
				`:root {--bg-color-body: #20252D;--bg-color-repoCard: #4D5157;
				--font-color-repoCard: white;
				--bg-color-repoCard__name-private: #46494D;
			    --bg-color-repoCard__details: #46494D;
				--bg-color-user-info-card: #4D5157;	
				}`,
				0
			);
			isDarkActive = true;
		}
	};
	return (
		<div className="switch">
			<img src={require('../../../assets/img/sun.png')} alt="sun" />
			<div className="custom-control custom-switch">
				<input
					type="checkbox"
					className="custom-control-input"
					id="customSwitches"
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
