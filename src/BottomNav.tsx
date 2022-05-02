import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom'
import './bottom-bar.css';

const BottomNav = () => {
    const navigate = useNavigate();
    const { user, courseID } = useParams();

    return (
        <div className='bottom-nav'>
            <button className='bn-tab' onClick={() => {navigate("/" + user + "/courses")}}>Home</button>
            <button className='bn-tab' onClick={() => {navigate("/" + user + "/" + courseID + "/groups")}}>Groups</button>
            <button className='bn-tab' onClick={() => {navigate("/" + user + "/" + courseID + "/students")}}>Students</button>
            <button className='bn-tab' onClick={() => {navigate("/" + user + "/" + courseID + "/profile")}}>Profile</button>
        </div>
    )
}

export default BottomNav;