const IP = '192.168.0.59' // 192.168.0.59
const URL = {
    GET_ENTRIES: `http://${IP}:4200/api/entries`,
    POST_LOGIN: `http://${IP}:4200/api/login`,
    POST_REGISTER: `http://${IP}:4200/api/register`,
    API_USER: `http://${IP}:4200/api/user`,
    INFO_COMMENTS: `http://${IP}:4200/info/comments`,
    ADD_ENTRY: `http://${IP}:4200/api/addEntry`,
    EDIT: `http://${IP}:4200/api/edit`,
    ADD_POP: `http://${IP}:4200/api/addPop`,
    IP: `${IP}`
}
export default URL