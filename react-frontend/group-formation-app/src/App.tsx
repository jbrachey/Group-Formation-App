import React from 'react';
import logo from './logo.svg';
import './App.css';
import CoursesHome from './CoursesHome';
import Groups from './Groups';
import GroupCreation from './GroupCreation';
import ProfileCreation from './ProfileCreation';
import Students from './Students';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={CoursesHome} />
      <Route exact path="/groups" component={Groups} />
      <Route exact path="/groupcreation" component={GroupCreation} />
      <Route exact path="/profilecreation" component={ProfileCreation} />
      <Route exact path="/students" component={Students} />
    </div>
  );
}

export default App;
