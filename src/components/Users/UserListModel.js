import React, { useEffect } from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../actions/userAction';
import LoadUser from '../layout/LoadUser';

const UserListModel = ({ getUsers, user: { users, loading } }) => {
  useEffect(() => {
    getUsers();
    //eslint-disable-next-line
  }, []);

  return (
    <div id='user-list-modal' className='modal'>
      <div className='modal-content'>
        <h4 className='center'>Users List</h4>
        <ul className='collection'>
          {!loading && users === null ? (
            <LoadUser />
          ) : !loading && users.length === 0 ? (
            <div>
              <p className='center'>
                No users found. Please add a new user to the list below to get
                started with the app :) <br />
                <br />
                <a
                  href='#add-user-modal'
                  className='modal-trigger modal-close black-text btn-small blue lighten-2 '
                >
                  Add User
                </a>
              </p>
              <LoadUser />
            </div>
          ) : (
            users.map((user) => <UserItem user={user} key={user.id} />)
          )}
        </ul>
      </div>
    </div>
  );
};

UserListModel.propTypes = {
  user: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(UserListModel);
