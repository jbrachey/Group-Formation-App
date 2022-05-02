import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import PageHeader from "../PageHeader";
import './../sign-in.css';
import firebase from '../firebase.js';
import { useParams } from "react-router";

const JoinCourse = () => {
    const navigate = useNavigate();
    const { user } = useParams();
    const [courseID, setCourseID] = useState("");
    const [courses, setCourses] = useState<any>([]);

    var fullArr: any[] = [];
    const fetchCourses = async() => {
        const response=firebase.db.collection('students').doc(user);
        await response.get()
        .then(doc => {
            const data = doc.data();
            if (data) {
                for (var x = 0; x < data.courses.length; x++) {
                    fullArr.push(data.courses[x]);
                }
            }
            setCourses([...courses, fullArr]);
        })
    }
    useEffect(() => {
    fetchCourses();
    }, [])

    const joinCourse = (courseID) => {
        let tempCourse: any = [];
        for (let x = 0; x < courses.length; x++) {
            if (typeof courses[x] == "object") {
                for (let y = 0; y < courses[x].length; y++) {
                    tempCourse.push(courses[x][y])
                }
            } else {
                tempCourse.push(courses[x]);
            }
        }
        tempCourse.push(courseID)

        firebase.db.collection("students").doc(user).update({
            courses: tempCourse
        })
        navigate('/' + user + '/courses');
    }
    return (
        <div>
            <PageHeader title={"Join Course"} hasBackArrow={false} />
            <ul>
                <li>
                    <label className="signin-info">Course ID:</label>
                    <br></br>
                    <input type="text" id="courseID" name="courseID" value={courseID} onChange={e => setCourseID(e.target.value)}/>
                </li>
                <li>

                </li>
                <li>
                    <button onClick={() => {
                        if (courseID != '') {
                            joinCourse(courseID);
                        }}} className="signin-button">
                        Join Course
                    </button>
                </li>
            </ul>
        </div>    
    ) 
}

export default JoinCourse;