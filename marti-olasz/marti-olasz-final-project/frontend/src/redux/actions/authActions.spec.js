// Function to test
import {
  getUser,
  addFollow,
  removeFollow,
  sendUserEditInfo,
  newBand
} from './authActions';

//Mock dependecies
import axios from 'axios';

jest.dontMock('./authActions');
jest.mock('axios');

describe('Auth action', () => {
  describe('getUser action', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /auth/:id', async () => {
      axios.post.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            json: () => {}
          })
        )
      );
      const user = {
        sub: 13,
        nickname: 'bombasto'
      };
      await getUser(user)(jest.fn());
      expect(axios.post.mock.calls[0][0]).toEqual('/auth/13');
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.post.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await getUser(13)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('addFollow action', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /auth/follow/:id', async () => {
      axios.post.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            data: { following: { push: () => {} } }
          })
        )
      );
      const userId = 13;
      await addFollow(userId)(jest.fn());
      expect(axios.post.mock.calls[0][0]).toEqual('/auth/follow/13');
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.post.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await addFollow(13)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('removeFollow action', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /auth/followDelete/:id', async () => {
      axios.post.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            data: { following: { filter: (callback) => callback() } }
          })
        )
      );
      const userId = 13;
      await removeFollow(userId)(jest.fn());
      expect(axios.post.mock.calls[0][0]).toEqual('/auth/followDelete/13');
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.post.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await removeFollow(13)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('sendUserEditInfo action', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /auth/:id', async () => {
      axios.patch.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            json: () => {}
          })
        )
      );
      const userId = 1;
      const userEditInfo = {
        user: 'user',
        bio: 'bio'
      };
      await sendUserEditInfo(userId, userEditInfo)(jest.fn());
      expect(axios.patch.mock.calls[0][0]).toEqual('/auth/1');
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.patch.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await sendUserEditInfo(1)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('newBand action', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /auth/newBand/:id', async () => {
      axios.post.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            json: () => {}
          })
        )
      );
      const userId = 1;
      await newBand(userId)(jest.fn());
      expect(axios.post.mock.calls[0][0]).toEqual('/auth/newBand/1');
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.post.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await newBand(1)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
