import { ICourse } from '../shared';

export const LOAD_COURSES = 'LOAD_COURSES';
export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
export const LOAD_COURSES_FAIL = 'LOAD_COURSES_FAIL';
export const SELECT_PAGE = 'SELECT_PAGE';
export const SELECT_SIZE = 'SELECT_SIZE';

export const REMOVE_COURSE = 'REMOVE_COURSE';
export const REMOVE_COURSE_SUCCESS = 'REMOVE_COURSE_SUCCESS';
export const REMOVE_COURSE_FAIL = 'REMOVE_COURSE_FAIL';
export const REMOVE_COURSE_POPUP = 'REMOVE_COURSE_POPUP';
export const SEARCH_COURSE = 'SEARCH_COURSE';

export const SAVE_COURSE = 'SAVE_COURSE';
export const SAVE_COURSE_SUCCESS = 'SAVE_COURSE_SUCCESS';
export const SAVE_COURSE_FAIL = 'SAVE_COURSE_FAIL';

export const GET_COURSE = 'GET_COURSE';
export const GET_COURSE_SUCCESS = 'GET_COURSE_SUCCESS';
export const GET_COURSE_FAIL = 'GET_COURSE_FAIL';

export const fetchListAction = () => ({
    type: LOAD_COURSES, payload: {}
});
export const fetchListSuccessAction = (res) => ({
    type: LOAD_COURSES_SUCCESS, payload: res
});
export const fetchListErrorAction = (error) => ({
    type: LOAD_COURSES_FAIL, payload: { error }
});

export const selectCoursePageAction = (page) => ({
    type: SELECT_PAGE, payload: { page }
});
export const searchQuesryAction = (query: string) => ({
    type: SEARCH_COURSE, payload: { query }
});
export const selectCourseSizeAction = (size) => ({
    type: SELECT_PAGE, payload: { size }
});

export const removeCourseAction = (course: ICourse) => ({
    type: REMOVE_COURSE, payload: { ...course }
});
export const removeCourseSuccessAction = () => ({
    type: REMOVE_COURSE_SUCCESS, payload: {}
});
export const removeCourseErrorAction = (error) => ({
    type: REMOVE_COURSE_FAIL, payload: { error }
});
export const openRemoveCoursePopupAction = (course: ICourse) => ({
    type: REMOVE_COURSE_POPUP, payload: { ...course }
});

export const saveCourseAction = (model: ICourse, isNew: boolean) => ({
    type: SAVE_COURSE, payload: { model, isNew }
});
export const saveCourseSuccessAction = (model: ICourse) => ({
    type: SAVE_COURSE_SUCCESS, payload: { ...model }
});
export const saveCourseFailAction = (error) => ({
    type: SAVE_COURSE_FAIL, payload: { error }
});

export const getCourseAction = (id) => ({
    type: GET_COURSE, payload: { id }
});
export const getCourseActionSuccess = (course: ICourse) => ({
    type: GET_COURSE_SUCCESS, payload: { ...course }
});
export const getCourseActionFail = (error) => ({
    type: GET_COURSE_FAIL, payload: { error }
});
