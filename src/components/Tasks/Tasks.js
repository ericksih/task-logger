import React, { useEffect } from 'react';
import PreLoader from '../layout/PreLoader';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTasks } from '../../actions/taskAction';

const Tasks = ({ task: { tasks, loading }, getTasks }) => {
  useEffect(() => {
    getTasks(); //  getTasks() is defined in actions/taskAction.js and is called in the mapStateToProps function above

    // eslint-disable-next-line
  }, []);

  if (loading || tasks === null) {
    return <PreLoader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Task List</h4>
      </li>
      {!loading && tasks.length === 0 ? (
        <p className='center'> No Task To Show... </p>
      ) : (
        tasks.map((task) => <TaskItem task={task} key={task.id} />)
      )}
    </ul>
  );
};

Tasks.propTypes = {
  task: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  task: state.task,
});

export default connect(mapStateToProps, { getTasks })(Tasks);
