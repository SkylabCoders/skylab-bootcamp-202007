import projectStore from '../stores/projectStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher';


describe('projectStore', () => {

  let callbackMockFunction;
  beforeEach(() => {
    callbackMockFunction = jest.fn();
    projectStore.addChangeListener(callbackMockFunction);

  });

  afterEach(() => {
    projectStore.removeChangeListener(callbackMockFunction);
  });

  it('should create', () => {
    expect(projectStore).toBeDefined();
    expect(callbackMockFunction).toHaveBeenCalledTimes(0);
  });

  it('should get credits from LOAD_QUESTION', () => {
    const credits = [{ credits: [{ questions: ['ergerg'] }] }]
    dispatcher.dispatch({
      type: actionTypes.LOAD_QUESTION,
      data: credits
    });
    expect(projectStore.getCredits()).toBeDefined();
  });

  it('should get categories', () => {
    const categories = [{ credits: [{ questions: ['ergerg'] }] }]
    dispatcher.dispatch({
      type: actionTypes.LOAD_QUESTION,
      data: categories
    });
    expect(projectStore.getCategories()).toEqual(categories);
  });

  it('should get questions from LOAD_QUESTION', () => {
    const question = [{ credits: [{ questions: [{ text: 'ergerg' }] }] }]
    dispatcher.dispatch({
      type: actionTypes.LOAD_QUESTION,
      data: question
    });
    expect(projectStore.getQuestionsName()).toEqual([undefined, undefined, question[0].credits[0].questions[0].text])
  });

  it('should get projects', () => {
    const projects = {
      projectName: 'project'
    }
    dispatcher.dispatch({
      type: actionTypes.LOAD_PROJECT,
      data: projects
    });
    expect(projectStore.getProjects()).toEqual(projects);
  });

  it('should register project', () => {
    const newProject = {
      projectName: 'project'
    }
    dispatcher.dispatch({
      type: actionTypes.REGISTER_PROJECT,
      data: newProject
    });
    expect(projectStore.getNewProject()).toEqual(newProject);
  });

  it('should save answers', () => {
    const answers = {
      input: 'value'
    }
    dispatcher.dispatch({
      type: actionTypes.SAVE_ANSWER,
      data: answers
    });
    expect(projectStore.saveAnswer()).toEqual(answers);
  });

  it('should get scores', () => {
    const scores = {
      answers: {}
    }
    dispatcher.dispatch({
      type: actionTypes.GET_SCORES,
      data: scores
    });
    expect(projectStore.getScores()).toEqual(scores);
  });

})