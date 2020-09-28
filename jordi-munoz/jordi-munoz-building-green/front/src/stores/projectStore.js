import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';

let _newProject;
let _projects;
let _answer;
let _scores;
let _categories = [];
let _credits = [];
let _questions = [];
let uniqQuestion = [];
let _scoresPercent = [];

function addScoresByCat(scores) {
  let scoresByCat = [];
  let countCat1 = 0;
  let countCat2 = 0;
  let countCat3 = 0;
  for (let key in scores) {
    try {
      if (key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9') {
        countCat1 = countCat1 + scores[key].score;
      } else if (key === '10' || key === '11' || key === '12' || key === '13') {
        countCat2 = countCat2 + scores[key].score;
      } else if (key === '14' || key === '15' || key === '16' || key === '17') {
        countCat3 = countCat3 + scores[key].score;
      }
    } catch { }
  }
  let cat1Percent = +(countCat1 / 15 * 100).toFixed();
  let cat2Percent = +(countCat2 / 7 * 100).toFixed();
  let cat3Percent = +(countCat3 / 11 * 100).toFixed();

  scoresByCat = [...scoresByCat, cat1Percent, cat2Percent, cat3Percent];
  return scoresByCat;
}
class ProjectStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getNewProject() {
    return _newProject;
  }

  saveAnswer() {
    return _answer;
  }

  getScores() {
    return _scores;
  }

  getScoresByCat() {
    return _scoresPercent;
  }

  getProjects() {
    return _projects;
  }

  getCategories() {
    return _categories;
  }

  getCredits() {
    return _credits;
  }

  getCreditsName() {
    if (_credits[0]) {

      return _credits[0].map(credit => credit.name);
    }
  }

  getQuestionsName() {
    return uniqQuestion.map(quest => quest.text);
  }
}

const projectStore = new ProjectStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.REGISTER_PROJECT:
      _newProject = action.data;
      sessionStorage.project = JSON.stringify(_newProject);
      projectStore.emitChange(_newProject);
      break;
    case actionTypes.SAVE_ANSWER:
      _answer = action.data;
      projectStore.emitChange(_answer);
      break;
    case actionTypes.LOAD_PROJECT:
      _projects = action.data;
      projectStore.emitChange(_projects);
      break;
    case actionTypes.LOAD_QUESTION:
      if (_credits) {
        _categories = action.data;
        _credits = action.data.map(cat => cat.credits);
        _questions = _credits[0].map(credit => credit.questions);

        _questions.forEach((questArray) => {
          questArray.forEach((question) => {
            uniqQuestion = [...uniqQuestion, question];
          })
        });

        projectStore.emitChange(_questions);
      }
      break;
    case actionTypes.GET_SCORES:
      _scores = action.data;
      _scoresPercent = addScoresByCat(_scores);
      console.log(_scoresPercent);
      projectStore.emitChange(_scoresPercent);
      break;

    default:

  }
});

export default projectStore;