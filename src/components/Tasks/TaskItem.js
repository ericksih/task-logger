import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const TaskItem = ({ task }) => {
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-task-modal'
          className={`modal-trigger ${
            task.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {task.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='grey-text'> ID# {task.id} </span> | Last updated by{' '}
          <span className='black-text'>{task.user}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{task.date}</Moment>
        </span>
        <a className='secondary-content' href='#!'>
          <i className='material-icons'>delete</i>
        </a>
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
