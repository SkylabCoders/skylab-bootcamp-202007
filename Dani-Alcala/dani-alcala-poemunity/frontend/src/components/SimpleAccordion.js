import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Header.scss";
import { Link } from "react-router-dom";


export default function SimpleAccordion() {  

  return (
    <div>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="header__dropdown-categories">Categorías</p>
        </AccordionSummary>
        <AccordionDetails>
          <Link className="header__dropdown-subcategories" to="/alegria">
            Alegría
          </Link>
        </AccordionDetails>
        <AccordionDetails>
          <Link className="header__dropdown-subcategories" to="/amistad">
            Amistad
          </Link>
        </AccordionDetails>
        <AccordionDetails>
          <Link className="header__dropdown-subcategories" to="/amor">
            Amor
          </Link>
        </AccordionDetails>
        <AccordionDetails>
          <Link className="header__dropdown-subcategories" to="/aniversario">
            Aniversario
          </Link>
        </AccordionDetails>
        <AccordionDetails>
          <Link className="header__dropdown-subcategories" to="/desamor">
            Desamor
          </Link>
        </AccordionDetails>
        <AccordionDetails>
          <Link className="header__dropdown-subcategories" to="/haikus">
            Haikus
          </Link>
        </AccordionDetails>
        <AccordionDetails>
          <Link className="header__dropdown-subcategories" to="/infantiles">
            Infantiles
          </Link>
        </AccordionDetails>
        <AccordionDetails>
          <Link className="header__dropdown-subcategories" to="/tristes">
            Tristes
          </Link>
        </AccordionDetails>
        <AccordionDetails>
          <Link className="header__dropdown-subcategories" to="/">
            Todos
          </Link>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
