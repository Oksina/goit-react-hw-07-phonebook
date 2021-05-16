import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './allContactsAction';

const contactReducer = createReducer([], {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const contactsReducer = combineReducers({
    items: contactReducer,
});

export default contactsReducer;
