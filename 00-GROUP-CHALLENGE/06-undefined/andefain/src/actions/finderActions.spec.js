import { finderSearch } from './finderActions';
import finder from '../mocks/finderMock';
import finderStore from '../stores/finderStore';

describe('Finder Actions test', () => {
	it('should return a search', () => {
		finderSearch();
		expect(finderStore.getFinder()).toEqual(finder);
	});
});
