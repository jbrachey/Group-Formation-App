import React from 'react';
import logo from './logo.svg';
import './App.css';
import CoursesHome from './Courses/CoursesHome';
import Groups from './Groups/Groups';
import GroupCreation from './Groups/GroupCreation';
import ProfileCreation from './ProfileCreation';
import Students from './Students/Students';
import {Route, Link, Routes} from 'react-router-dom';
import GroupDetailedInfo from './Groups/GroupDetailedInfo';
import "./index.css";
import StudentDetailedInfo from './Students/StudentDetailedInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Eventually the path / will take you to login */}
        <Route path="/:user/courses" element={<CoursesHome />} />
        <Route path="/:user/:courseID/groups" element={<Groups/>} />
        <Route path="/:user/:courseID/group/:groupID" element={<GroupDetailedInfo/>} />
        <Route path="/:user/:courseID/groupcreation" element={<GroupCreation/>} />
        <Route path="/:user/profilecreation" element={<ProfileCreation/>} />
        <Route path="/:user/:courseID/students" element={<Students/>} />
        <Route path="/:user/:courseID/student/:studentID" element={<StudentDetailedInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
