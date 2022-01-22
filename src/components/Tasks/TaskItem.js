import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteTask } from '../../actions/taskAction';
import M from 'materialize-css/dist/js/materialize.min.js';

const TaskItem = ({ task, deleteTask }) => {
  const onDelete = () => {
    deleteTask(task.id);
    M.toast({ html: `Task Deleted` });
  };

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
        <a onClick={onDelete} className='secondary-content' href='#!'>
          <i className='material-icons'>delete</i>
        </a>
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default connect(null, { deleteTask })(TaskItem);
