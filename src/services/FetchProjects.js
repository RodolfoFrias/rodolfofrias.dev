import { fetchProjectsPending, fetchProjectsSuccess, fetchProjectsError } from '../actions/index';

const API = 'http://localhost:1337/projects';
const headers = new Headers();
const CONFIG = {
    method: 'GET',
    headers: headers
}


const fetchProjects = () => {
    return dispatch => {
        dispatch(fetchProjectsPending());
        fetch(API, CONFIG)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProjectsSuccess(res.products));
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProjectsError(error));
        })
    }
}

export default fetchProjects;