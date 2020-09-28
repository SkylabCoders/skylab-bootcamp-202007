import React from 'react';
import '../styles/logo.style.scss';

function Logo() {
	return (
		<>
			<div className="logo-holder flex-col">
				<div className="flex-col logo-holder">
					<div>
						<span style={{ color: 'black' }}>SKY</span>
						<span style={{ color: '#0673da' }}>LAB</span>
					</div>
					<div>
						<span style={{ color: '#FAC710' }}>[</span>
						<span style={{ color: 'white' }}>HIRED!</span>
						<span style={{ color: '#FAC710' }}>]</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Logo;
