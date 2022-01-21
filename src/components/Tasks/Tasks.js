import React, { useState, useEffect } from 'react';
import PreLoader from '../layout/PreLoader';
import TaskItem from './TaskItem';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTasks();
    //eslint-disable-next-line
  }, []);

  const getTasks = async () => {
    setLoading(true);

    const res = await fetch('/tasks');
    const data = await res.json();

    setTasks(data);
    setLoading(false);
  };

  if (loading) {
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

export default Tasks;
