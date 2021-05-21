import React, { Component } from 'react';
import Form from './components/Contacts/Form/Form';
import List from './components/Contacts/List/List';
import Filter from './components/Filter/Filter';
import { connect } from 'react-redux';
import contactsOperations from './redux/Contacts/allContactsOperations';
import { getLoading } from './redux/Contacts/allContactsSelector';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './index.css';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        return (
            <div className="main">
                <h1>Phonebook</h1>
                <Form />
                <h2>Contacts </h2>
                <Filter />
                {this.props.isLoadingContact && (
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={50}
                        width={50}
                        timeout={3000}
                        className="loader"
                    />
                )}
                <List />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoadingContacts: getLoading(state),
    };
};
const mapDispatchToProps = dispatch => ({
    fetchContacts: () =>
        dispatch(contactsOperations.fetchContact()),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
