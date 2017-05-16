import { Action } from '@ngrx/store';

import {
    LOAD_COURSES,
    LOAD_COURSES_SUCCESS,
    LOAD_COURSES_FAIL,
    SELECT_PAGE,
    SELECT_SIZE,
    REMOVE_COURSE,
    REMOVE_COURSE_SUCCESS,
    REMOVE_COURSE_FAIL
} from './courses.actions';

const initialState = {
    loaded: false,
    loading: false,
    items: [],
    page: 0,
    size: 3,
    total: null
};

export const courses = (state = initialState, action: Action) => {
    switch (action.type) {
        case LOAD_COURSES:
        case REMOVE_COURSE:
            return Object.assign({}, state, {
                loading: true
            });
        case LOAD_COURSES_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                total: action.payload.total,
                items: action.payload.items,
                page: action.payload.page
            });
        case SELECT_PAGE:
            return Object.assign({}, state, {
                page: action.payload.page
            });
        case SELECT_SIZE:
            return Object.assign({}, state, {
                size: action.payload.size
            });
        case REMOVE_COURSE_SUCCESS:
            return Object.assign({}, state, {
                loading: false
            });
        case REMOVE_COURSE_FAIL:
        case LOAD_COURSES_FAIL:
            return Object.assign({}, state, {
                error: action.payload.error,
                loading: false
            });
        default:
            return state;
    }
};
