import onSearch from './onSearch';

describe('onSearch test', () => {
  const event = {
    keyCode: 13,
    target: { value: { toLowerCase: jest.fn() } }
  };
  const dispatch = jest.fn();
  const setRedirect = jest.fn();

  it('should redirect if keyCode is 13', () => {
    onSearch(event, dispatch, setRedirect);
    expect(setRedirect.mock.call).truthy;
  });

  it("should don't redirect if keyCode don't is 13", () => {
    event.keyCode = 0;
    onSearch(event, dispatch, setRedirect);
  });
});
