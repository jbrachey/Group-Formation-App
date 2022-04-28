import React from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import PageHeader from "../PageHeader";
import CourseDisplay from "./CourseDisplay";

const CoursesHome = () => {
    const navigate = useNavigate();
    const { studentID } = useParams();
    const courses = getCourses(studentID);
    return(
        <div>
            <PageHeader title={"Courses"} hasBackArrow={false} />
            <ul>
                {courses.map(course => {
                    return (
                    <li key={course.courseID}>
                        <CourseDisplay name={course.name} courseID={course.courseID} />
                    </li>
                    )
                })}
            </ul>
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