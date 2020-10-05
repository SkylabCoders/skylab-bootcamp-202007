import onFollow from './onFollow';

describe('onFollow test', () => {
  const event = { preventDefault: jest.fn() };
  const user = { _id: 1 };
  const bandId = 1;
  let isFollowing = false;
  const setIsFollowing = jest.fn();
  const dispatch = jest.fn();

  it('should add follower', () => {
    onFollow(event, user, bandId, isFollowing, setIsFollowing, dispatch);

    expect(dispatch.call).truthy;
  });

  it('should remove follower', () => {
    isFollowing = true;
    onFollow(event, user, bandId, isFollowing, setIsFollowing, dispatch);

    expect(dispatch.call).truthy;
  });

  const emptyUser = {};
  const alertSpy = jest.fn();
  jest.spyOn(window, 'alert').mockImplementation(alertSpy);

  it('should call alert', () => {
    onFollow(event, emptyUser);

    expect(alertSpy.call).truthy;
  });
});
