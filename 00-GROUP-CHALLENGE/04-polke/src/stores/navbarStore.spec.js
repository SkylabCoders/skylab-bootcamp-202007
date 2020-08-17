import navbarStore from './navbarStore';

describe('Navbar Store', () => {
	it('should create', () => {
		expect(navbarStore).toBeDefined();
	});

	it('should subscribe to addChangeListener', () => {
		const mockFunct = jest.fn();
		navbarStore.addChangeListener(mockFunct);
		navbarStore.emitChange();
		expect(mockFunct).toHaveBeenCalled();
	});

	it('should unsubscribe from addChangeListener', () => {
		const mockFunct = jest.fn();
		navbarStore.addChangeListener(mockFunct);
		navbarStore.emitChange();
		navbarStore.removeChangeListener(mockFunct);
		expect(mockFunct).toHaveBeenCalled();
	});
});
