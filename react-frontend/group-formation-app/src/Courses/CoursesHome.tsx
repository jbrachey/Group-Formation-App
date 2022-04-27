import React from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import CourseDisplay from "./CourseDisplay";

const CoursesHome = () => {
    const navigate = useNavigate();
    const { studentID } = useParams();
    const courses = getCourses(studentID);
    return(
        <div>
            <h1 className="App-header App-h1">Courses</h1>
            {courses.map(course => {
                return (
                <li key={course.courseID}>
                    <CourseDisplay name={course.name} courseID={course.courseID} />
                </li>
                )
            })}
            {/*<button onClick={() => {navigate('/groups')}} class="App-CoursesButton button4400">CS4400: Database Systems</button>
            <br></br>
            <br></br>
            <button class="App-CoursesButton button2340">CS2340: Objects & Design</button>
            <br></br>
            <br></br>
            <button class="App-CoursesButton button4261">CS4261: Mobile Apps & Svcs</button>
            <br></br>
            <br></br>
            <br></br>
            <button class="App-JoinCourseButton">Join Course</button>*/}
        </div>
    )
}

const getCourses = (studentID) => {
    // Will be backend api call
    const course1 = {
        courseID: 1,
        name: "Mobile Apps and Services",
        minStudentsPerGroup: 3,
        maxStudentsPerGroup: 5
    }
    const course2 = {
        courseID: 2,
        name: "CS4649",
        minStudentsPerGroup: 4,
        maxStudentsPerGroup: 5
    }
    const course3 = {
        courseID: 3,
        name: "CS2340",
        minStudentsPerGroup: 4,
        maxStudentsPerGroup: 4
    }
    const course4 = {
        courseID: 4,
        name: "Physics",
        minStudentsPerGroup: 3,
        maxStudentsPerGroup: 3
    }
    return [course1, course2, course3, course4];
}


export default CoursesHome;