import React, { useState, useEffect } from 'react';
import UserItem from './UserItem';

const UserListModel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
    //eslint-disable-next-line
  }, []);

  const getUsers = async () => {
    setLoading(true);

    const res = await fetch('/users');
    const data = await res.json();

    setUsers(data);
    setLoading(false);
  };

  return (
    <div id='user-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Users List</h4>
        <ul className='collection modal-closed'>
          {!loading && users.length === 0 ? (
            <p className='center'>
              No users found. Please add a new user to the list below to get
              started with the app :) <br />
              <a href='#add-user-modal' className='modal-trigger modal-close'>
                {' '}
                Add User
              </a>
            </p>
          ) : (
            users.map((user) => <UserItem user={user} key={user.id} />)
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserListModel;
