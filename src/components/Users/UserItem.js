import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteUser } from '../../actions/userAction';
import M from 'materialize-css/dist/js/materialize.min.js';

const UserItem = ({ user: { id, firstName, lastName }, deleteUser }) => {
  const onDelete = () => {
    deleteUser(id);
    M.toast({
      html: 'Success deleted',
      classes: 'red darken-2',
    });
  };

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons'>delete</i>
        </a>
      </div>
    </li>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default connect(null, { deleteUser })(UserItem);
