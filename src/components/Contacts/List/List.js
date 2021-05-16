import React from 'react';
import ListItem from './ListItem/ListItem';
import s from './List.module.css';
import { connect } from 'react-redux';

const List = ({ contacts }) => {
    return (
        <ul className={s.list}>
            {contacts.length > 0 ? (
                <ListItem contacts={contacts} />
            ) : (
                <p className={s.message}>You have no contacts jet.</p>
            )}
        </ul>
    );
};

const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );
};

const mapStateToProps = ({ contacts: { items }, filter }) => ({
    contacts: getVisibleContacts(items, filter),
});

export default connect(mapStateToProps, null)(List);
