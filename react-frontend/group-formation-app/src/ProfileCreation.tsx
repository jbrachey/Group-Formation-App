import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";
import './sign-in.css';

const ProfileCreation = ({}) => {
    const navigate = useNavigate();
    const { user } = useParams();
    const navigationURL = '/' + user + '/courses';
    return (
        <div>
            <PageHeader title={"Profile Creation"} hasBackArrow={false} />
            <ul>
                <li>
                    <label className="signin-info">Name:</label>
                    <br></br>
                    <input type="text" id="name" name="name"/>
                    <br></br>
                    <label className="signin-info">Major:</label>
                    <br></br>
                    <input type="text" id="major" name="major"/>
                    <br></br>
                    <label className="signin-info">Email:</label>
                    <br></br>
                    <input type="text" id="email" name="email"/>
                    <br></br>
                    <label className="signin-info">Year:</label>
                    <br></br>
                    <input type="text" id="year" name="year"/>
                    <br></br>
                    <label className="signin-info">Student ID:</label>
                    <br></br>
                    <input type="text" id="studentID" name="studentID"/>
                    <br></br>
                    <label className="signin-info">Password:</label>
                    <br></br>
                    <input type="text" id="password" name="password"/>
                    <br></br>
                </li>
               
                <li>
                    <br></br>
                    <button onClick={() => {navigate(navigationURL)}} className="signin-button">
                        Create Account
                    </button>
                </li>

            </ul>
        </div>    
    )
}

export default ProfileCreation;
