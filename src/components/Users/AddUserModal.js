import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser } from '../../actions/userAction';

const AddUserModal = ({ addUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (!firstName || !lastName) {
      M.toast({
        html: 'Please enter a first and last name',
        classes: 'red darken-2',
      });
    } else {
      addUser({
        firstName,
        lastName,
      });

      // Clear Fields after submit
      setFirstName('');
      setLastName('');
      M.toast({
        html: `Successfully added ${firstName} ${lastName}`,
        classes: 'teal lighten-2 black-text',
      });
    }
  };

  return (
    <div id='add-user-modal' className='modal'>
      <div className='modal-content'>
        <h4>Add a new user</h4>
        <br />
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close btn waves-effect waves-teal'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddUserModal.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default connect(null, { addUser })(AddUserModal);
