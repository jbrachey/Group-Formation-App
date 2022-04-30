import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const CourseDisplay = ({name, courseID, isProfessor}) => {
    const navigate = useNavigate();
    const { user } = useParams();
    const navigationURL = isProfessor ? ('/p/' + user + '/' + courseID) : '/' + user + '/' + courseID + '/groups';
    return (
        <div>
            <button onClick={() => {navigate(navigationURL)}} className="group-display">
                <div>{name}</div>
            </button>
        </div>
    )
}

export default CourseDisplay;