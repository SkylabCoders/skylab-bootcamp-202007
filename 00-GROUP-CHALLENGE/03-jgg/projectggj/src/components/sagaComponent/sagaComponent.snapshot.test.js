import renderer from 'react-test-renderer';
import SagaComponent from './sagaComponent';
import { BrowserRouter as Router } from 'react-router-dom';


describe('sagaComponent', () => {
    const sagaComponentTree = renderer.create(
        <Router>
            <SagaComponent />
        </Router>
    );
    it('should macth', () => {
        expect(heroDashboardTree).toMatchSnapshot();
    })
});