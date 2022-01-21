import React, { useState, useEffect } from 'react';

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
    <h4> Loading ... </h4>;
  }

  return (
    <ul className='collection-with-header'>
      <li className='collection-header'>
        <h4 className='center'> Task List </h4>
      </li>
      {!loading && tasks.lengs === 0 ? (
        <p className='center'> No Task To Show... </p>
      ) : (
        tasks.map((task) => <li key={task.id}>{task.message}</li>)
      )}
    </ul>
  );
};

export default Tasks;
