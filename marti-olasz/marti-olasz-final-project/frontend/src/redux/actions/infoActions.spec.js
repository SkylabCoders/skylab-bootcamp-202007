// Function to test
import { uploadImage } from './infoActions';

//Mock dependecies
import axios from 'axios';

jest.mock('axios');

describe('Auth action', () => {
  const dispatch = jest.fn();
  const url = 'url';
  const img = 'img';
  const identifier = 'identifier';

  describe('uploadImage action', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call dispatcher', async () => {
      axios.post.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            data: {}
          })
        )
      );
      await uploadImage(url, img, identifier)(dispatch);
      expect(dispatch.mock.calls.length).toEqual(1);
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.post.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await uploadImage(13)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
