import React from 'react';
import ListItem from './ListItem/ListItem';
import s from './List.module.css';
import { connect } from 'react-redux';
import {
    getVisibleContacts,
    getFilter,
} from '../../../redux/Contacts/allContactsSelector';

const List = ({ contacts }) => {
    console.log({ contacts });
    return (
        <ul className={s.list}>
            {contacts.length > 0 ? (
                <ListItem contacts={contacts} />
            ) : (
                <p className={s.message}>
                    You have no contacts.
                </p>
            )}
        </ul>
    );
};

const mapStateToProps = state => ({
    contacts: getVisibleContacts(state),
    filter: getFilter(state),
});

export default connect(mapStateToProps, null)(List);

// const getVisibleContacts = (allContacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();

//     return allContacts.filter(contact =>
//         contact.name
//             .toLowerCase()
//             .includes(normalizedFilter),
//     );
// };

// const mapStateToProps = ({
//     contacts: { items },
//     filter,
// }) => ({
//     contacts: getVisibleContacts(items, filter),
// });
