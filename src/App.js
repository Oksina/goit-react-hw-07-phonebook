import React from 'react';
import Form from './components/Contacts/Form/Form';
import List from './components/Contacts/List/List';
import Filter from './components/Filter/Filter';

import './index.css';
import './App.css';

const App = () => {
    return (
        <div className="main">
            <h1>Phonebook</h1>
            <Form />
            <h2>Contacts </h2>
            <Filter />
            <List />
        </div>
    );
};

export default App;
