import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import PageHeader from "../PageHeader";
import CourseDisplay from "./../Courses/CourseDisplay";
import firebase from './../firebase.js';
import React,{useState,useEffect} from 'react';

const ProfessorCoursesHome = () => {
    const navigate = useNavigate();
    const { user } = useParams();
    console.log("ProfID: ",user);
    //const courses = getCourses(studentID);
    const [courses,setCourses]=useState<any>([])
    var fullArr: any[] = []
    var courseArr: any[] = []
    const fetchProfessors = async() => {
        const response=firebase.db.collection('professors').doc(user);
        await response.get()
        .then(doc => {
            const data = doc.data();
            if (data) {
                for (var x = 0; x < data.courses.length; x++) {
                    //console.log(data.courses[x]);
                    fullArr.push(data.courses[x]);
                }
            }
            console.log(fullArr);
            
        })
        for (var y = 0; y < fullArr.length; y++) {
            const response=firebase.db.collection('courses').where("courseID", "==", fullArr[y]);
            const data = await response.get();
            console.log(data.docs);
            data.docs.forEach(item=>{
                console.log(item.data());
                courseArr.push(item.data());
            })
        }
        setCourses([...courses, courseArr])
    
    }
    useEffect(() => {
    fetchProfessors();
    }, [])
    console.log('Courses:', courses);
    return(
        <div>
            <PageHeader title={"Courses"} hasBackArrow={false} />
            <ul>
                {courses[0] && courses[0].map(course => {
                    return (
                    <li key={course.courseID}>
                        <CourseDisplay name={course.name} courseID={course.courseID} isProfessor={true}/>
                    </li>
                    )
                })}
            </ul>
            <button onClick={() => navigate('/p/' + user + '/coursecreation')}>Create Course</button>
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

export default ProfessorCoursesHome;