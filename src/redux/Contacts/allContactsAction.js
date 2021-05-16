import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as id } from 'uuid';
id();

axios.defaults.baseURL = 'http://localhost:4040/';
const addContact = e => dispatch => {
    const contact = { name, number };
    axios
        .post('./contacts', contact)
        .then(({ data }) => dispatch({ type: 'contacts/add', payload: data }))
        .catch(error =>
            dispatch({ type: 'contacts/ addError', payload: error }),
        );
};
// const addContact = createAction('contacts/add', e => ({
//     payload: {
//         name: e.name,
//         number: e.number,
//         id: id(),
//},
//}));
const deleteContact = createAction('contacts/delete');

export default { addContact, deleteContact };
