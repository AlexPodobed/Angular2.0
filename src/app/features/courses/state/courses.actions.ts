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

export const fetchListAction = () => ({
    type: LOAD_COURSES, payload: {}
});

export const fetchListSuccessAction = (res) => ({
    type: LOAD_COURSES_SUCCESS, payload: res
});

export const fetchListErrorAction = (err) => ({
    type: LOAD_COURSES_FAIL, payload: err
});

export const selectCoursePageAction = (page) => ({
    type: SELECT_PAGE, payload: { page }
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
export const removeCourseErrorAction = (err) => ({
    type: REMOVE_COURSE_FAIL, payload: { err }
});

export const openRemoveCoursePopupAction = (course: ICourse) => ({
    type: REMOVE_COURSE_POPUP, payload: { ...course }
});
