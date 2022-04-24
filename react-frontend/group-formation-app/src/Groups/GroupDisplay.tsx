import './group-styles.css';

const GroupDisplay = ({name, schedule, neededExp, numStudents, totalStudents}) => {
    return (
        <div>
            <button className="group-display">
                <label>{name}</label>
                <br></br>
                <text className="group-info">Required Skills/Experience: {neededExp}</text>
                <br></br>
                <button className="groups-button">Request to Join Team</button>
            </button>
        </div>
    )
}

export default GroupDisplay;