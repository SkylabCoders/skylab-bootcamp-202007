import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import '../../../shared/generalStyles.css';
import './PopUpBox.css';
import { createNewUser } from '../../../actions/loginActions';

function PopUpBox() {
	return (
		<Modal.Dialog className="pop-up-modal">
			<Modal.Header
				closeButton
				onClick={() => {
					document.getElementsByClassName('pop-up-modal')[0].style.display =
						'none';
				}}
			>
				<Modal.Title>Register New User</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form className="pop-up-modal__pop-up-form">
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							className="input-email-modal"
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							className="input-password-modal"
						/>
					</Form.Group>
					<p className="passWarning">
						Password must have at least 6 characters
					</p>
					<Button
						variant="primary"
						type="submit"
						onClick={(event) => {
							event.preventDefault();
							const email = document.getElementsByClassName(
								'input-email-modal'
							)[0].value;
							const password = document.getElementsByClassName(
								'input-password-modal'
							)[0].value;
							if (password.length >= 6) {
								createNewUser(email, password);
								document.getElementsByClassName(
									'pop-up-modal'
								)[0].style.display = 'none';
							} else {
								document.getElementsByClassName(
									'passWarning'
								)[0].style.display = 'inline-block';
							}
						}}
					>
						Submit
					</Button>
				</Form>
			</Modal.Body>
		</Modal.Dialog>
	);
}

export default PopUpBox;
