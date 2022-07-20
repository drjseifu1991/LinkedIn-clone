import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { selectUser } from './features/userSlice';
import Login from './Login';
import {useSelector} from 'react-redux'

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header/>
      {!user ? (
        <Login/>
      ) : (
        <div className='app_body'>
          <Sidebar/>
          <Feed/>
          { /* Widget */ }
        </div>
      )}
    </div>  
  );
}

export default App;
