import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";
import './sign-in.css';
import firebase from './firebase.js';
import React,{useState,useEffect} from 'react';

const AccountCreation = ({}) => {
    const navigate = useNavigate();
    const initState = {name: '', major: '', year: '', email: '', studentID: '', password: ''};
    const [inputs, setInputs] = useState(initState);
    const handleChange = e => {
        //console.log(e.target);
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value}))
    }
    const createUser = () => {
        firebase.db.collection("students").doc(inputs.studentID).set({
            courses: [null],
            email: inputs.email,
            major: inputs.major,
            pw: inputs.password,
            year: inputs.year,
            studentID: inputs.studentID,
            name: inputs.name,
            availability: true
        })
        navigate('/' + inputs.studentID + '/courses');
    }
    return (
        <div>
            <PageHeader title={"Account Creation"} hasBackArrow={false} />
            <ul>
                <li>
                    <label className="signin-info">Name:</label>
                    <br></br>
                    <input type="text" id="name" name="name" value={inputs.name} onChange={handleChange}/>
                    <br></br>
                    <label className="signin-info">Major:</label>
                    <br></br>
                    <input type="text" id="major" name="major" value={inputs.major} onChange={handleChange}/>
                    <br></br>
                    <label className="signin-info">Email:</label>
                    <br></br>
                    <input type="text" id="email" name="email" value={inputs.email} onChange={handleChange}/>
                    <br></br>
                    <label className="signin-info">Year:</label>
                    <br></br>
                    <input type="text" id="year" name="year" value={inputs.year} onChange={handleChange}/>
                    <br></br>
                    <label className="signin-info">Student ID:</label>
                    <br></br>
                    <input type="text" id="studentID" name="studentID" value={inputs.studentID} onChange={handleChange}/>
                    <br></br>
                    <label className="signin-info">Password:</label>
                    <br></br>
                    <input type="text" id="password" name="password" value={inputs.password} onChange={handleChange}/>
                    <br></br>
                </li>
               
                <li>
                    <br></br>
                    <button onClick={() => {createUser()}} className="signin-button">
                        Create Account
                    </button>
                </li>

            </ul>
        </div>    
    )
}

export default AccountCreation;
