import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTaskModal = () => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [user, setUser] = useState('');

  const onSubmit = () => {
    if (!message || !user) {
      M.toast({
        html: 'Please enter a message and select a user',
        classes: 'red darken-2',
      });
    } else {
      console.log(message, attention, user);
      setMessage('');
      setAttention(false);
      setUser('');
      M.toast({
        html: `Task Created By ${user}`,
        classes: 'teal lighten-2 black-text',
      });
    }
  };

  return (
    <div id='add-task-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Add a new task</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Task Message
            </label>
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
              <option value='Doel'>Doel</option>
              <option value='Mandra'>Mandra</option>
              <option value='Jaenap'>Jaenap</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
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

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default AddTaskModal;
