import React from "react";
import './student-styles.css';
import { useNavigate, useParams } from "react-router-dom";
import BottomNav from "../BottomNav";
import ConciseScheduleView from "../Schedule/ConciseScheduleView";

const StudentDisplay = ({studentID, name, major, year, availability}) => {
    const navigate = useNavigate();
    const { userID, courseID } = useParams();
    const navigationURL = '/' + userID + '/' + courseID + '/student/' + studentID;
    return (
        <div>
            <button onClick={() => {navigate(navigationURL)}} className="student-display">
                <label>{name}</label>
                <br/>
                <text className="student-info">Major: {major}</text>
                <br/>
                <text className="student-info">Year: {year}</text>
                <br/>
                <ConciseScheduleView availability={availability} />
                <br/>
                <button onClick={e => {
                    e.stopPropagation();
                    // handle invitation here, need to add logic 
                    // so it only shows button if you're in a group
                    }} className="students-button">Invite to Join Your Team</button>
            </button>
        </div>
    )
}

export default StudentDisplay;