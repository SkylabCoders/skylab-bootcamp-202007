import { loadQuestions, loadProjects, registerNewProject, deleteProject, saveAnswers, getScores } from '../actions/projectActions';
import dispatcher from '../appDispatcher';
import axios from 'axios';
import actionTypes from '../actions/actionTypes';

jest.dontMock('../actions/projectActions');
jest.mock('axios');
jest.mock('../appDispatcher');


describe('projectActions', () => {

  afterEach(() => {
    dispatcher.dispatch.mockClear();
  })

  it('should call a get Projects', async () => {
    axios.get.mockReturnValue(new Promise((resolve, reject) => resolve({ name: 'Localización' })));
    await loadProjects([]);
    const getCall = axios.get.mock.calls[0][0];

    expect(getCall).toEqual('/api/projects');

  });

  it('should call a post new Project', async () => {
    axios.post.mockReturnValue(new Promise((resolve, reject) => resolve({ projectName: 'sbd' })));
    await registerNewProject({});

    expect(dispatcher.dispatch.mock.calls[0][0]).toBeDefined();

  });

  it('should call a delete Project', async () => {
    const props = { params: 'bcn' };
    axios.delete.mockReturnValue(new Promise((resolve, reject) => resolve({ props })));
    await deleteProject({});

    expect(dispatcher.dispatch.mock.calls[0][0]).toBeDefined();

  });

  it('should call a load Questions', async () => {
    const props = { params: 'kssk' };
    axios.get.mockReturnValue(new Promise((resolve, reject) => resolve({ props })));
    await loadQuestions({});

    const dispatchCallback = {
      type: actionTypes.LOAD_QUESTION
    }

    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual(dispatchCallback);

  });

  it('should call a save answer', async () => {
    const props = {};
    axios.put.mockReturnValue(new Promise((resolve, reject) => resolve({ props })));
    await saveAnswers({});

    expect(dispatcher.dispatch.mock.calls[0][0]).toBeDefined();

  });

  it('should call a getScores', async () => {
    const props = {};
    axios.get.mockReturnValue(new Promise((resolve, reject) => resolve({ props })));
    await getScores({});

    expect(dispatcher.dispatch.mock.calls[0][0]).toBeDefined();

  });

})