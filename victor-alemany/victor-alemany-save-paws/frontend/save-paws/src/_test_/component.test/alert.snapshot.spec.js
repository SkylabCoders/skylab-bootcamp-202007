import React from 'react';
import renderer from 'react-test-renderer';
import Alert from '../../components/alert';
import { BrowserRouter } from 'react-router-dom';

function renderAlert(receivedId){
	const props = {
		match: {
			params:{
				alertId: receivedId
			}
		}
	}

	return renderer.create(
		<BrowserRouter>
			<Alert {...props}/>
		</BrowserRouter>
	);
}

describe('Alert snapshot', () => {
	let alertTree;

	beforeEach(()=>{
		alertTree = renderAlert(1);
		alertTree.update();
	})

	it('should match', () => {
		expect(alertTree).toMatchSnapshot();
	});
});
