import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import '../../../shared/generalStyles.css';
import './PopUpBox.css';

function PopUpBox() {
	return (
		<Modal.Dialog className="pop-up-modal">
			<Modal.Header closeButton>
				<Modal.Title>Register New User</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form className="pop-up-modal__pop-up-form">
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">
							Mail will never share with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Modal.Body>
		</Modal.Dialog>
	);
}

export default PopUpBox;
