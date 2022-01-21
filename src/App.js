import React, { useEffect, Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Tasks from './components/Tasks/Tasks';
import AddBtn from './components/layout/AddBtn';
import AddTaskModal from './components/Tasks/AddTaskModal';

function App() {
  useEffect(() => {
    M.AutoInit(); // Initialize Materialize JS
  });

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <Tasks />
        <AddTaskModal />
      </div>
    </Fragment>
  );
}

export default App;
