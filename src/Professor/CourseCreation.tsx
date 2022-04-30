import { useState } from "react";
import { useNavigate } from "react-router";
import PageHeader from "../PageHeader";
import './../sign-in.css';
import firebase from '../firebase.js';
import { useParams } from "react-router";

const CourseCreation = () => {
    const navigate = useNavigate();
    const { user } = useParams();
    const initState = {courseID: '', courseName: '', minGroupSize: '', maxGroupSize: ''};
    const [inputs, setInputs] = useState(initState);
    const handleChange = e => {
        //console.log(e.target);
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value}))
    }
    const createCourse = () => {
        console.log('creating course ' + inputs.courseID);
        firebase.db.collection("courses").doc(inputs.courseID).set({
            courseID: inputs.courseID,
            name: inputs.courseName,
            min: inputs.minGroupSize,
            max: inputs.maxGroupSize,
        })
        // Here need to update groups to have the new group
        firebase.db.collection("professors").doc(user).update({
            groups: [null],
        })
        navigate('/p/' + user + '/courses');
    }
    return (
        <div>
            <PageHeader title={"Group Formation App"} hasBackArrow={false} />
            <ul>
                <li>
                    <label className="signin-info">Course ID:</label>
                    <br></br>
                    <input type="text" id="courseID" name="courseID" value={inputs.courseID} onChange={handleChange}/>
                    <br></br>
                    <label className="signin-info">Course Name:</label>
                    <br></br>
                    <input type="text" id="courseName" name="courseName" value={inputs.courseName} onChange={handleChange}/>
                    <br></br>
                    <label className="signin-info">Min Group Size:</label>
                    <br></br>
                    <input type="text" id="minGroupSize" name="minGroupSize" value={inputs.minGroupSize} onChange={handleChange}/>
                    <br></br>
                    <label className="signin-info">Max Group Size:</label>
                    <br></br>
                    <input type="text" id="maxGroupSize" name="maxGroupSize" value={inputs.maxGroupSize} onChange={handleChange}/>
                    <br></br>
                </li>
                <li>

                </li>
                <li>
                    <button onClick={() => {
                        if (inputs.courseID != '' && inputs.courseName != '' && inputs.minGroupSize != '' && inputs.maxGroupSize != '') {
                            createCourse();
                        }}} className="signin-button">
                        Create Course
                    </button>
                </li>
            </ul>
        </div>    
    ) 
}

export default CourseCreation;