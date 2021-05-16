//import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import contactsReducer from './Contacts/allContactsReducer';
import filterReducer from './Filter/filterReducer';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
];

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

//const persistor = persistStore(store);

export default store;
