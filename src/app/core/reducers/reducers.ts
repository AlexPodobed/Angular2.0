import { Action } from '@ngrx/store';
import { ADD_COURSE, EDIT_COURSE, REMOVE_COURSE } from '../actions/courses.actions';

export const HOUR = 'HOUR';
export const SECOND = 'SECOND';
export const RECALL = 'RECALL';
export const ADVANCED = 'ADVANCED';

export const clock = (state = new Date(), action: Action = { type: '' }) => {
    const date = new Date(state.getTime());

    switch (action.type) {
        case SECOND:
            date.setSeconds(date.getSeconds() + action.payload);
            return date;
        case HOUR:
            date.setHours(date.getHours() + action.payload);
            return date;
        default:
            return state;
    }
};

const defaultPeople = [
    { name: 'Sara', time: clock() },
    { name: 'Alex', time: clock() },
    { name: 'John', time: clock() }
];
export const people = (state = defaultPeople, action: Action) => {
    switch (action.type) {
        case ADVANCED:
            return state.map((person) => {
                if (action.payload === person) {
                    return {
                        name: person.name,
                        time: clock(person.time, { type: HOUR, payload: 2 })
                    };
                }

                return person;
            });
        case RECALL:
            return state.map((person) => {
                return {
                    name: person.name,
                    time: action.payload
                };
            });
        default:
            return state;
    }
};

export const courseReducer = (state, action: Action) => {
    switch (action.type) {
        case ADD_COURSE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
