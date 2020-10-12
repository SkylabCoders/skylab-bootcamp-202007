function getHeaders (){
  return { Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('USER_TOKEN'))}` };
}

export default getHeaders;