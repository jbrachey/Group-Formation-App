import React from 'react';
import logo from './logo.svg';
import './App.css';
import CoursesHome from './CoursesHome';
import Groups from './Groups/Groups';
import GroupCreation from './Groups/GroupCreation';
import ProfileCreation from './ProfileCreation';
import Students from './Students';
import {Route, Link, Routes} from 'react-router-dom';
import "./index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CoursesHome />} />
        <Route path="/:courseID/groups" element={<Groups/>} />
        <Route path="/groupcreation" element={<GroupCreation/>} />
        <Route path="/profilecreation" element={<ProfileCreation/>} />
        <Route path="/students" element={<Students/>} />
      </Routes>
    </div>
  );
}

export default App;
