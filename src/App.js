import React, { useEffect, Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Tasks from './components/Tasks/Tasks';

function App() {
  useEffect(() => {
    M.AutoInit(); // Initialize Materialize JS
  });

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <Tasks />
      </div>
    </Fragment>
  );
}

export default App;
