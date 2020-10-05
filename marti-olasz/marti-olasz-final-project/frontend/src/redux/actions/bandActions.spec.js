// Function to test
import {
  getBand,
  searchBand,
  follow,
  sendBandEditInfo,
  createDisc,
  deleteDisc,
  createConcert,
  deleteConcert,
  createPhoto,
  deletePhoto
} from './bandActions';

//Mock dependecies
import axios from 'axios';

jest.dontMock('./bandActions');
jest.mock('axios');

describe('Band actions', () => {
  describe('Get Band test', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /band/:id', async () => {
      axios.get.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            json: () => {}
          })
        )
      );
      await getBand(5)(jest.fn());
      expect(axios.get.mock.calls[0][0]).toEqual('/band/5');
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.get.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await getBand(5)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('Search Band test', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /band/search/:id', async () => {
      axios.get.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            json: () => {}
          })
        )
      );
      const text = 'klk';
      await searchBand(text)(jest.fn());
      expect(axios.get.mock.calls[0][0]).toEqual(`/band/search/${text}`);
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.get.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await searchBand(5)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('Search Band test', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /band/follow/:id', async () => {
      axios.get.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            json: () => {}
          })
        )
      );
      const text = 'klk';
      await follow(text)(jest.fn());
      expect(axios.get.mock.calls[0][0]).toEqual(`/band/follow/${text}`);
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.get.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await follow(5)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('sendBandEditInfo test', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /aut/band/:id', async () => {
      axios.patch.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            json: () => {}
          })
        )
      );
      const id = 1;
      await sendBandEditInfo(id)(jest.fn());
      expect(axios.patch.mock.calls[0][0]).toEqual(`/auth/band/${id}`);
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.patch.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await sendBandEditInfo(5)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('createDisc test', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /aut/newDisc/:id', async () => {
      axios.post.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            data: {
              discography: {
                push: () => {}
              }
            }
          })
        )
      );
      const id = 1;
      const discInfo = {};
      await createDisc(id, discInfo)(jest.fn());
      expect(axios.post.mock.calls[0][0]).toEqual(`/auth/newDisc/${id}`);
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.post.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await createDisc(5)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('deleteDisc test', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /aut/newDisc/:id', async () => {
      const dispatch = jest.fn();
      axios.patch.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            data: {
              discography: {
                filter: (callback) => callback()
              }
            }
          })
        )
      );
      const id = 1;
      const discInfo = {};
      await deleteDisc(id, discInfo)(dispatch);
      expect(dispatch.mock.calls.length).toEqual(1);
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.patch.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await deleteDisc(5)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('createConcert test', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /aut/newConcert/:id', async () => {
      axios.post.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            data: {
              discography: {
                push: () => {}
              }
            }
          })
        )
      );
      const id = 1;
      const discInfo = {};
      await createConcert(id, discInfo)(jest.fn());
      expect(axios.post.mock.calls[0][0]).toEqual(`/auth/newConcert/${id}`);
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.post.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await createConcert(5)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('deleteConcert test', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /aut/newConcert/:id', async () => {
      axios.patch.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            data: {
              concerts: {
                filter: (callback) => callback()
              }
            }
          })
        )
      );
      const id = 1;
      const discInfo = {};
      await deleteConcert(id, discInfo)(jest.fn());
      expect(axios.patch.mock.calls[0][0]).toEqual(`/auth/newConcert/${id}`);
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.patch.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await deleteConcert(5)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('createPhoto test', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.post.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            data: {}
          })
        )
      );
      const id = 1;
      const discInfo = {};
      await createPhoto(id, discInfo)(dispatch);
      expect(dispatch.mock.calls.length).toEqual(1);
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.post.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await createPhoto(5)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('deletePhoto test', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.patch.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            data: {}
          })
        )
      );
      const id = 1;
      const discInfo = {};
      await deletePhoto(id, discInfo)(dispatch);
      expect(dispatch.mock.calls.length).toEqual(1);
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.patch.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await deletePhoto(5)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
