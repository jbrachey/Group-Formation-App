import './group-styles.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import ConciseScheduleView from '../Schedule/ConciseScheduleView';
import GroupDisplayHeader from './GroupDisplayHeader';
import { useState } from 'react';

const GroupDisplay = ({groupID, name, availability, neededExp, numStudents, totalStudents}) => {
    const navigate = useNavigate();
    const { user, courseID } = useParams();
    const [requested, setRequested] = useState(false);
    const navigationURL = '/' + user + '/' + courseID + '/group/' + groupID;
    return (
        <div>
            <button onClick={() => {navigate(navigationURL)}} className="group-display">
                <GroupDisplayHeader name={name} numStudents={numStudents} totalStudents={totalStudents}/>
                <text className="group-info">Required Skills/Experience: {neededExp}</text>
                <br/>
                <ConciseScheduleView availability={availability} />
                <br/>
                <button onClick={e => {
                    e.stopPropagation();
                    // handle request to join here
                    setRequested(!requested);
                    }} className="groups-button">{requested ? "Request Pending" : "Request to Join Team"}</button>
            </button>
        </div>
    )
}

export default GroupDisplay;