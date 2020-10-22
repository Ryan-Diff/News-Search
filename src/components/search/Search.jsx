import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onSubmit, onChange }) => (
    <form onSubmit={onSubmit}>
        <label htmlFor='search'>Search</label>
        <input
          id='search'
          type='search'
          name='search'
          value={search}
          onChange={onChange}
          />
          <button data-testid='button'>Search</button>
    </form>
);

Search.propTypes = {
    search: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Search;