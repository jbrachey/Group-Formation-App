import PageHeader from "./PageHeader";
import './App.css';
import { useNavigate } from "react-router";

const FirstPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <PageHeader title={"Group Formation App"} hasBackArrow={false} />
            <label>I am a...</label>
            <br />
            <button onClick={() => navigate('/studentsignin')} className="initial-buttons">Student</button>
            <br />
            <button onClick={() => navigate('/professorsignin')} className="initial-buttons">Professor</button>
        </div>
    )
}

export default FirstPage;