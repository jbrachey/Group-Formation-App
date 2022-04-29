import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";
import './sign-in.css';

const SignIn = ({}) => {
    const navigate = useNavigate();
    const { user } = useParams();
    const navigationURLlogin = '/' + user + '/courses';
    const navigationURLsignup = '/' + 'ProfileCreation'
    return (
        <div>
            <PageHeader title={"Group Formation Application"} hasBackArrow={false} />
            <ul>
                <li>
                    <label className="signin-info">Username:</label>
                    <br></br>
                    <input type="text" id="username" name="username"/>
                    <br></br>
                    <label className="singin-info">Password:</label>
                    <br></br>
                    <input type="text" id="password" name="password"/>
                    <br></br>
                </li>
                <li>

                </li>
                <li>
                    <button onClick={() => {navigate(navigationURLlogin)}} className="signin-button">
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