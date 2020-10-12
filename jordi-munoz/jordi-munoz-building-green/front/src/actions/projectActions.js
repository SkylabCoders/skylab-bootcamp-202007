import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

const headers = { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('USER_TOKEN'))}` };

export function loadQuestions() {
  return axios.get('/api/categories', { headers }).then((categories) => {

    dispatcher.dispatch({
      type: actionTypes.LOAD_QUESTION,
      data: categories.data
    });
  });
}

export function loadProjects(userId) {

  const props = { params: { userId } };

  return axios.get('/api/projects', props).then((projects) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_PROJECT,
      data: projects.data
    });
  });
}


export function registerNewProject(dataProject) {

  return axios.post('api/projects/', dataProject).then((project) => {
    dispatcher.dispatch({
      type: actionTypes.REGISTER_PROJECT,
      data: project
    });
  });
}

export function deleteProject(projectName) {

  const props = { params: { projectName } };

  return axios.delete('api/projects/', props).then((dataProjectName) => {
    dispatcher.dispatch({
      type: actionTypes.DELETE_PROJECT,
      data: dataProjectName
    });
  });
}

export function saveAnswers(answers) {

  return axios.put('api/projects/', answers).then((answer) => {
    dispatcher.dispatch({
      type: actionTypes.SAVE_ANSWER,
      data: answer
    });
  });
}

export function getScores(idProject) {

  return axios.get(`api/projects/${idProject}/scores`).then((scores) => {
    dispatcher.dispatch({
      type: actionTypes.GET_SCORES,
      data: scores.data
    });
  });
}