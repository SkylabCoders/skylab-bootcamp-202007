import renderer from 'react-test-renderer';
import BrowserRouter from 'react-router-dom';
import Login from './Login';

function renderLogin() {
	const tree = renderer.create(
		<BrowserRouter>
			<Login />
		</BrowserRouter>
	);
	return tree;
}

describe('Login', () => {
	let instance;
	let element;
	let text;
	beforeEach(() => {
		const loginTree = renderLogin();
		i;
	});
});
