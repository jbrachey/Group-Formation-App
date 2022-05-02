import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import PageHeader from "../PageHeader";
import './../sign-in.css';
import firebase from '../firebase.js';
import React,{useState,useEffect} from 'react';

const ProfessorSignIn = ({}) => {
    const navigate = useNavigate();
    const initState = {username: '', pw: ''};
    const [inputs, setInputs] = useState(initState);
    const handleChange = e => {
        //console.log(e.target);
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value}))
    }
    const [professors ,setProfessors]=useState<any>([])
    var fullArr: any[] = []
    const fetchProfessors = async() => {
        const response=firebase.db.collection('professors');
        const data = await response.get();
        //console.log(data.docs);
        data.docs.forEach(item=>{
            fullArr.push(item.data());
        })
        setProfessors([...professors, fullArr])
    }
    useEffect(() => {
        fetchProfessors();
    }, [])
    const checkLogin = () => {
        //console.log(inputs)
        console.log(professors[0].length);
        for (var x = 0; x < professors[0].length; x++) {
            if (inputs.pw === professors[0][x].pw && inputs.username === professors[0][x].username) {
                const user = inputs.username
                const navigationURLlogin = '/p/' + user + '/courses';
                navigate(navigationURLlogin);
            } else {
                console.log(professors[0][x].username, " not right");
            }
        }
    }
    const createProfessor = () => {
        firebase.db.collection("professors").doc(inputs.username).set({
            courses: [null],
            username: inputs.username,
            pw: inputs.pw
        })
    }
    return (
        <div>
            <PageHeader title={"Group Formation App"} hasBackArrow={false} />
            <ul>
                <li>
                    <label className="signin-info">Username:</label>
                    <br></br>
                    <input type="text" id="username" name="username" value={inputs.username} onChange={handleChange}/>
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
                    <button onClick={() => {
                        if (inputs.username != '' && inputs.pw != '') {
                            createProfessor();
                            navigate('/p/' + inputs.username + '/courses');
                        }
                        }} className="signin-button">
                        Sign Up
                    </button>
                </li>
            </ul>
        </div>    
    )
}

const handleSignup = (inputs) => {
    const username = inputs.username;
    const pw = inputs.pw;
    
    
}

export default ProfessorSignIn;