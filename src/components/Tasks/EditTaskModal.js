import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateTask } from '../../actions/taskAction';
import UserSelectOptions from '../Users/UserSelectOptions';

const EditTaskModal = ({ updateTask, current }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setUser(current.user);
    }
  }, [current]);

  const onSubmit = () => {
    if (!message || !user) {
      M.toast({
        html: 'Please enter a message and select a user',
        classes: 'red darken-2',
      });
    } else {
      const updTask = {
        id: current.id,
        message,
        user,
        attention,
        date: new Date(),
      };

      updateTask(updTask);

      setMessage('');
      setAttention(false);
      setUser('');
      M.toast({
        html: `Task Edited By ${user}`,
        classes: 'teal lighten-2 black-text',
      });
    }
  };

  return (
    <div id='edit-task-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4> Edit a task </h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'></label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='user'
              value={user}
              className='browser-default'
              onChange={(e) => setUser(e.target.value)}
            >
              <option value='' disabled>
                Select Assignee User
              </option>
              <UserSelectOptions />
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='indeterminate-checkbox'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Attention</span>
              </label>
            </p>
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

EditTaskModal.propTypes = {
  current: PropTypes.object,
  updateTask: PropTypes.func.isRequired,
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

const mapStateToProps = (state) => ({
  current: state.task.current, // current is the task that is being edited by the user in the edit modal
});

export default connect(mapStateToProps, { updateTask })(EditTaskModal);
