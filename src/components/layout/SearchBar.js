import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchTasks } from '../../actions/taskAction';

const SearchBar = ({ searchTasks }) => {
  const text = useRef('');

  const onChange = () => {
    searchTasks(text.current.value);
  };

  const clear = () => {
    text.current.value = '';
    searchTasks('');
  };

  return (
    <nav style={{ marginBottom: '30px' }} className='teal lighten-2'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Tasks..'
              ref={text}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons' onClick={clear}>
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.prototype = {
  searchTasks: PropTypes.func.isRequired,
};

export default connect(null, { searchTasks })(SearchBar);
