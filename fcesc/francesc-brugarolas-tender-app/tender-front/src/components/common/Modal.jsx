import React, { useEffect } from 'react';
import Map from './Map';
import './modal.sass';
import CloseIcon from '@material-ui/icons/Close';

const Modal = ({ onRequestClose, title, coordinates }) => {
	
  useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				onRequestClose();
			}
		}

		document.body.style.overflow = 'hidden';
		document.addEventListener('keydown', onKeyDown);

		return () => {
			document.body.style.overflow = 'visible';
			document.removeEventListener('keydown', onKeyDown);
		};
	});

  return (
		<div className='modal__backdrop'>
			<div className='modal__container'>
				<Map coordinates={coordinates} />
        <div className='modal__titlebar'>
          <CloseIcon className='close__icon' htmlColor='#06aed5' onClick={onRequestClose} />
          <p className='modal__title'>{title}</p>
        </div>
			</div>
		</div>
	);
};

export default Modal;
