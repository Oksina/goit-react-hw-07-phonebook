import axios from 'axios';
import {
    addContactSuccess,
    addContactRequest,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './allContactsAction';
// import { v4 as id } from 'uuid';
// id();

axios.defaults.baseURL = `http://localhost:4040`;

const fetchContact = () => dispatch => {
    dispatch(fetchContactRequest());
    axios
        .get('/contacts')
        .then(({ data }) =>
            dispatch(fetchContactSuccess(data)),
        )
        .catch(error => dispatch(fetchContactError(error)));
};

const addContact = e => dispatch => {
    const contact = {
        name: e.name,
        number: e.number,
        //id: id(),
    };

    dispatch(addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) =>
            dispatch(addContactSuccess(data)),
        )
        .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error =>
            dispatch(deleteContactError(error)),
        );
};

export default { fetchContact, addContact, deleteContact };
