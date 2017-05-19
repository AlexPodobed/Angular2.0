import { Action } from '@ngrx/store';
import * as actions from './courses.actions';
import { CoursesState } from './courses-state.model';

const initialState: CoursesState = {
    loaded: false,
    loading: false,
    items: [],
    page: 0,
    size: 3,
    query: '',
    total: null
};

function setState(state, data) {
    return Object.assign({}, state, data);
}

export const courses = (state: CoursesState = initialState, action: Action) => {
    switch (action.type) {
        case actions.LOAD_COURSES:
        case actions.REMOVE_COURSE:
        case actions.SAVE_COURSE:
        case actions.GET_COURSE:
            console.log('reducer')
            return setState(state, { loading: true });


        case actions.LOAD_COURSES_SUCCESS:
            return setState(state, {
                loading: false,
                loaded: true,
                total: action.payload.total,
                items: action.payload.items,
                page: action.payload.page
            });

        case actions.SELECT_PAGE:
            return setState(state, { page: action.payload.page });

        case actions.SELECT_SIZE:
            return setState(state, { size: action.payload.size });

        case actions.REMOVE_COURSE_SUCCESS:
        case actions.SAVE_COURSE_SUCCESS:
        case actions.GET_COURSE_SUCCESS:
            return setState(state, { loading: false });

        case actions.REMOVE_COURSE_FAIL:
        case actions.LOAD_COURSES_FAIL:
        case actions.SAVE_COURSE_FAIL:
        case actions.GET_COURSE_FAIL:
            return setState(state, {
                error: action.payload.error,
                loading: false
            });

        case actions.SEARCH_COURSE:
            return setState(state, {
                query: action.payload.query,
                page: 0
            });

        default:
            return state;
    }
};
