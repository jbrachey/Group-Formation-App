import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";
import './sign-in.css';
import firebase from './firebase.js';
import React,{useState,useEffect} from 'react';

const SignIn = ({}) => {
    const navigate = useNavigate();
    const initState = {studentID: '', pw: ''};
    const [inputs, setInputs] = useState(initState);
    const handleChange = e => {
        //console.log(e.target);
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value}))
    }
    const navigationURLsignup = '/' + 'ProfileCreation';
    const [students,setStudents]=useState<any>([])
    var fullArr: any[] = []
    const fetchStudents = async() => {
        const response=firebase.db.collection('students');
        const data = await response.get();
        //console.log(data.docs);
        data.docs.forEach(item=>{
            fullArr.push(item.data());
        })
        setStudents([...students, fullArr])
    }
    useEffect(() => {
    fetchStudents();
    }, [])
    //console.log('Students:', students);
    const checkLogin = () => {
        //console.log(inputs)
        console.log(students[0].length);
        for (var x = 0; x < students[0].length; x++) {
            if (inputs.pw === students[0][x].pw && inputs.studentID === students[0][x].studentID) {
                const user = inputs.studentID
                const navigationURLlogin = '/' + user + '/courses';
                navigate(navigationURLlogin);
            } else {
                console.log(students[0][x].studentID, " not right");
            }
        }
    }
    return (
        <div>
            <PageHeader title={"Group Formation App"} hasBackArrow={false} />
            <ul>
                <li>
                    <label className="signin-info">Student ID:</label>
                    <br></br>
                    <input type="text" id="username" name="studentID" value={inputs.studentID} onChange={handleChange}/>
                    <br></br>
                    <label className="signin-info">Password:</label>
                    <br></br>
                    <input type="text" id="password" name="pw" value={inputs.pw} onChange={handleChange}/>
                    <br></br>
                </li>
                <li>

                </li>
                <li>
                    <button onClick={() => {checkLogin()}} className="signin-button">
                        Log In
                    </button>
                </li>
                <li>
                    <button onClick={() => {navigate(navigationURLsignup)}} className="signin-button">
                        Sign Up
                    </button>
                </li>
            </ul>
        </div>    
    )
}

export default SignIn;