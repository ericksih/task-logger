import React, { useEffect, Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Tasks from './components/Tasks/Tasks';
import AddBtn from './components/layout/AddBtn';
import AddTaskModal from './components/Tasks/AddTaskModal';
import EditTaskModal from './components/Tasks/EditTaskModal';
import AddUserModal from './components/Users/AddUserModal';
import UserListModel from './components/Users/UserListModel';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  useEffect(() => {
    M.AutoInit(); // Initialize Materialize JS
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <Tasks />
          <AddTaskModal />
          <EditTaskModal />
          <AddUserModal />
          <UserListModel />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
