import {  FETCH_PROJECTS_ERROR, FETCH_PROJECTS_PENDING, FETCH_PROJECTS_SUCCESS } from '../actions/index';

const initialState = {
    pending: false,
    projects: [],
    error: null
}

export const projectsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PROJECTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                pending: false,
                projects: action.payload
            }
        case FETCH_PROJECTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getProjects = state => state.products;
export const getProjectsPending = state => state.pending;
export const getProjectsError = state => state.error;