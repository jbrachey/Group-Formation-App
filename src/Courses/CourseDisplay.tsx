import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const CourseDisplay = ({name, courseID}) => {
    const navigate = useNavigate();
    const { user } = useParams();
    const navigationURL = '/' + user + '/' + courseID + '/groups';
    return (
        <div>
            <button onClick={() => {navigate(navigationURL)}} className="group-display">
                <div>{name}</div>
            </button>
        </div>
    )
}

export default CourseDisplay;