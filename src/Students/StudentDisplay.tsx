import React, { useState } from "react";
import './student-styles.css';
import { useNavigate, useParams } from "react-router-dom";
import BottomNav from "../BottomNav";
import ConciseScheduleView from "../Schedule/ConciseScheduleView";
import StudentDisplayHeader from "./StudentDisplayHeader";

const StudentDisplay = ({studentID, name, major, year, availability}) => {
    console.log("StudDisplay: ", availability);
    const navigate = useNavigate();
    const { user, courseID } = useParams();
    const [invited, setInvited] = useState(false);
    const navigationURL = '/' + user + '/' + courseID + '/student/' + studentID;
    return (
        <div>
            <button onClick={() => {navigate(navigationURL)}} className="student-display">
                <StudentDisplayHeader name={name} />
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
                    setInvited(!invited);
                    }} className="students-button">{invited ? "Invitation Pending" : "Invite to Your Team"}</button>
            </button>
        </div>
    )
}

export default StudentDisplay;