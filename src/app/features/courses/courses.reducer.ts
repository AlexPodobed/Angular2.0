import { Action } from '@ngrx/store';
import { ICourse } from './shared/course.model';
import { State } from "ngrx/@ngrx/store";

import { LOAD_COURSES, LOAD_COURSES_SUCCESS, SELECT_PAGE, SELECT_SIZE } from './courses.actions';

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
            console.log(`action: SELECT PAGE ${action.payload.page}`)
            return Object.assign({}, state, {
                page: action.payload.page
            });
        case SELECT_SIZE:
            return Object.assign({}, state, {
                size: action.payload.size
            });
        default:
            return state;
    }
};
