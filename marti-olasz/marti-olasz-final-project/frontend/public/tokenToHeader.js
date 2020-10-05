const token = JSON.parse(sessionStorage.getItem('token'));
const response = await axios.get(`http://localhost:1312/band/${id}`, {
  headers: { Authorization: `Bearer ${token}` }
});

axios({
  method: 'GET',
  url: 'http://url.com',
  headers: { Authorization: `Bearer ${token}` }
});

const headers = {
  Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('USER_TOKEN'))}`
};

export function loadQuestions() {
  return axios.get('/api/categories', { headers }).then((categories) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_QUESTION,
      data: categories.data
    });
  });
}
