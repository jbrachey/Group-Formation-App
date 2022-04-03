import React from "react";
import { useNavigate } from 'react-router-dom';

function CoursesHome(){
    const navigate = useNavigate();
    return(
        <div>
            <h1 className="App-header App-h1">Courses</h1>
            <button onClick={() => {navigate('/groups')}} class="App-CoursesButton button4400">CS4400: Database Systems</button>
            <br></br>
            <br></br>
            <button class="App-CoursesButton button2340">CS2340: Objects & Design</button>
            <br></br>
            <br></br>
            <button class="App-CoursesButton button4261">CS4261: Mobile Apps & Svcs</button>
            <br></br>
            <br></br>
            <br></br>
            <button class="App-JoinCourseButton">Join Course</button>
        </div>
    )
}


export default CoursesHome;