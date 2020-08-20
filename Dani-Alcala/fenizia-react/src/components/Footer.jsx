import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
        <Link to="/" className="logo__fenizia"></Link>
        <div className="contain__text">
          <Link to="/sobre-nosotros" className="footer__about">SOBRE NOSOTROS</Link>
          <div className="footer__phone">93 123 000 123</div>
          <div className="footer__email">info@fenizia.com</div>
          <Link className="footer__terms" to="/aviso-legal">Aviso legal</Link> 
        </div>
        <div className="contain__social">
          <div className="footer__follow">Síguenos</div>
          <div className="footer__social-buttons">
            <Link className="footer__twitter"></Link>
            <Link className="footer__facebook"></Link>
            <Link className="footer__instagram"></Link>
          </div>
        </div>
    </section>
  );
}

export default Footer;
