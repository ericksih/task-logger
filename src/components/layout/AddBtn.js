import React from 'react';

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#main-app'
        className='btn-floating cyan pulse btn-large blue darken-1 modal-trigger'
      >
        <i className='material-icons'>menu</i>
      </a>
      <ul>
        <li>
          <a
            href='#add-task-modal'
            className='btn-floating blue darken-2 modal-trigger'
          >
            <i className='large material-icons'>add</i>
          </a>
        </li>
        <li>
          <a
            href='#user-list-modal'
            className='btn-floating green modal-trigger'
          >
            <i className='material-icons'>person</i>
          </a>
        </li>
        <li>
          <a href='#add-user-modal' className='btn-floating red modal-trigger'>
            <i className='material-icons'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
