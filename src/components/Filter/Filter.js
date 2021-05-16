import React from 'react';
import { connect } from 'react-redux';
import filterActions from '../../redux/Filter/filterAction';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <div>
            <label className={s.label}>
                Find contacts by name
                <input
                    type="text"
                    name="filter"
                    placeholder="Name"
                    onChange={onChange}
                    value={value}
                    className={s.input}
                />
            </label>
        </div>
    );
};

const mapStateToProps = state => ({
    value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(filterActions.changeFilter(e.currentTarget.value)),
});

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
