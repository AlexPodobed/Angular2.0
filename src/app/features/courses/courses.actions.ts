export const LOAD_COURSES = 'LOAD_COURSES';
export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
export const LOAD_COURSES_FAIL = 'LOAD_COURSES_FAIL';
export const SELECT_PAGE = 'SELECT_PAGE';
export const SELECT_SIZE = 'SELECT_SIZE';

export const REMOVE_COURSES = 'REMOVE_COURSES';
export const REMOVE_COURSES_SUCCESS = 'REMOVE_COURSES_SUCCESS';
export const REMOVE_COURSES_FAIL = 'REMOVE_COURSES_FAIL';

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
