import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './portfolioProjectItem.sass';
import PlaceIcon from '@material-ui/icons/Place';
import Modal from './../common/Modal';

function PortfolioProjectItem(props) {
  const [ isModalOpen, setModalIsOpen ] = useState(false);
  const project = props.project;
  const coordinates = `${project.location.latitude},${project.location.longitude}`;

  const toggleModal = () => {
		setModalIsOpen(!isModalOpen);
  };
  
  return (
    <li key={project.title}>
      {isModalOpen && <Modal onRequestClose={toggleModal} title={project.title} coordinates={coordinates}/>}
      <div className='portfolioProjList__item'>
        <div className='item__content'>
          <div className='item__img'>
            <img className='img--insideCard' alt='' src={project.img.replace(' ', '')} />
          </div>
          <div className='item__text'>
            <div className='item__title'>
              <h3>{project.title}</h3>
              <h5>{project.status}</h5>
            </div>
            <div className='text__subtitle'>
              <Link to={`project/${project.slug}`}><button className='card__button'>OPEN PROJECT</button></Link>
              <Link to={`project/${project.slug}`}><button className='card__button'>TOTAL BUDGET</button></Link>
              <Link to={`project/${project.slug}`}><button className='card__button'>TOTAL ACTUAL</button></Link>
            </div>
            <div className='text__body'>
              <p>{project.description}</p> 
            </div>
            <div className='location__bar'>
              <div className='location__icon'>
                <PlaceIcon className='place__icon' onClick={toggleModal}/>
              </div>
              <div className='location__text'>
                <p>{project.location.street}, {project.location.city}, {project.location.postalCode}</p>
                <p>{project.location.region}, {project.location.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default PortfolioProjectItem;


/*
                <a target='_blank' href={`${API_MAPS.protocol}${API_MAPS.host}${API_MAPS.query}${project.location.latitude},${project.location.longitude}`}>
                  <PlaceIcon></PlaceIcon>
                </a>
*/






