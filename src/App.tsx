import React from 'react';
import logo from './logo.svg';
import './App.css';
import CoursesHome from './Courses/CoursesHome';
import Groups from './Groups/Groups';
import GroupCreation from './Groups/GroupCreation';
import AccountCreation from './AccountCreation';
import Students from './Students/Students';
import {Route, Link, Routes} from 'react-router-dom';
import GroupDetailedInfo from './Groups/GroupDetailedInfo';
import "./index.css";
import StudentDetailedInfo from './Students/StudentDetailedInfo';
import SignIn from './SignIn';
import FirstPage from './FirstPage';
import ProfessorSignIn from './Professor/ProfessorSignIn';
import ProfessorCoursesHome from './Professor/ProfessorCoursesHome';
import ProfessorCourseView from './Professor/ProfessorCourseView';
import CourseCreation from './Professor/CourseCreation';
import ProfileCreation from './Students/ProfileCreation';
import ProfileUpdate from './Students/ProfileUpdate';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Eventually the path / will take you to login */}
        <Route path="/" element={<FirstPage/>} />
        <Route path="/studentsignin" element={<SignIn/>} />
        <Route path="/professorsignin" element={<ProfessorSignIn/>} />
        <Route path="/p/:user/courses" element={<ProfessorCoursesHome/>} />
        <Route path="/p/:user/:courseID" element={<ProfessorCourseView/>} />
        <Route path="/p/:user/coursecreation" element={<CourseCreation/>} />
        <Route path="/:user/courses" element={<CoursesHome />} />
        <Route path="/:user/:courseID/groups" element={<Groups/>} />
        <Route path="/:user/:courseID/makeprofile" element={<ProfileCreation/>} />
        <Route path="/:user/:courseID/group/:groupID" element={<GroupDetailedInfo/>} />
        <Route path="/:user/:courseID/groupcreation" element={<GroupCreation/>} />
        <Route path="/accountcreation" element={<AccountCreation/>} />
        <Route path="/:user/:courseID/profile" element={<ProfileUpdate/>} />
        <Route path="/:user/:courseID/students" element={<Students/>} />
        <Route path="/:user/:courseID/student/:studentID" element={<StudentDetailedInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
