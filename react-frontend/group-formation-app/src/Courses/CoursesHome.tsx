
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import PageHeader from "../PageHeader";
import CourseDisplay from "./CourseDisplay";
import firebase from './../firebase.js';
import React,{useState,useEffect} from 'react';

const CoursesHome = () => {
    const navigate = useNavigate();
    const { studentID } = useParams();
    //const courses = getCourses(studentID);
    const [courses,setCourses]=useState<any>([])
    var fullArr: any[] = []
    const fetchStudents = async() => {
        const response=firebase.db.collection('courses');
        const data = await response.get();
        console.log(data.docs);
        data.docs.forEach(item=>{
            console.log(item.data());
            console.log(item.data().courses);
            fullArr.push(item.data());
        })
        setCourses([...courses, fullArr])
        
    }
    useEffect(() => {
    fetchStudents();
    }, [])
    console.log('Courses:', courses);
    return(
        <div>
            <PageHeader title={"Courses"} hasBackArrow={false} />
            <ul>
                {courses[0] && courses[0].map(course => {
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

/*
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
*/

export default CoursesHome;