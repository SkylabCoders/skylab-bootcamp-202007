import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

function Footer() {
	return (
		<footer className="footer-container">
			<Link to="/" className="footer-link-logo">
				<img
					className="image-logo"
					src="https://trello-attachments.s3.amazonaws.com/5f282a8dc47fa449625898e8/231x81/282f5095873b5824c7bf9db954205c03/logo_sin_margen.png"
					alt="Andefain Logo"
				/>
			</Link>
			<div className="footer--info">
				<Link to="/about" className="footer--info-general">
					<p>About Andefain</p>
				</Link>
				<Link to="/privacy" className="footer--info-general">
					<p>Privacy Policy</p>
				</Link>
			</div>
			<p className="copyright">
				2020 © Andefain, S.L. - Aleix - Martí - Vanesa
			</p>
		</footer>
	);
}

export default Footer;
