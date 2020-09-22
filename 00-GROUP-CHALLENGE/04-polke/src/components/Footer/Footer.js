import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../shared/generalStyles.css';
import './Footer.css';

function Footer() {
	return (
		<div className="footer__container footer__container--color fixed-bottom">
			<p className="footer__item">
				Copyright &copy;{' '}
				<a href="https://github.com/Dani-Alonso">Dani Alonso</a> |{' '}
				<a href="https://github.com/phortela1n">Pablo Hortelano</a> |{' '}
				<a href="https://github.com/gerardramonp">Gerard Ramon</a>
			</p>

			<a
				href="https://github.com/SkylabCoders/skylab-bootcamp-202007/tree/master/00-GROUP-CHALLENGE/04-polke"
				className="footer__item"
			>
				About
			</a>
		</div>
	);
}

export default Footer;
