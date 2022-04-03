import { useNavigate } from 'react-router-dom'
import './bottom-bar.css';

const BottomNav = () => {
    const navigate = useNavigate();

    return (
        <div className='bottom-nav'>
            <button className='bn-tab' onClick={() => {navigate("/")}}>Home</button>
            <button className='bn-tab' onClick={() => {navigate("/groups")}}>Groups</button>
            <button className='bn-tab' onClick={() => {navigate("/students")}}>Students</button>
        </div>
    )
}

export default BottomNav;