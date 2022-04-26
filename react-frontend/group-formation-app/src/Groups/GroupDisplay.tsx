import './group-styles.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

const GroupDisplay = ({groupID, name, schedule, neededExp, numStudents, totalStudents}) => {
    const navigate = useNavigate();
    const { userID, courseID } = useParams();
    const navigationURL = '/' + userID + '/' + courseID + '/group/' + groupID;
    return (
        <div>
            <button onClick={() => {navigate(navigationURL)}} className="group-display">
                <label>{name}</label>
                <br></br>
                <text className="group-info">Required Skills/Experience: {neededExp}</text>
                <br></br>
                <button onClick={e => {
                    e.stopPropagation();
                    // handle request to join here
                    }} className="groups-button">Request to Join Team</button>
            </button>
        </div>
    )
}

export default GroupDisplay;