import { useParams } from "react-router-dom";
import BottomNav from "../BottomNav";
import ScheduleView from "../Schedule/ScheduleView";

const StudentDetailedInfo = () => {
    const { courseID, studentID } = useParams();
    const studentInfo = getStudentInfo(courseID, studentID);
    const availability = { availability: studentInfo.availability };
    return (
        <div>
            <div>{studentInfo.name}</div>
            <br/>
            <div>Major: {studentInfo.major}</div>
            <br/>
            <div>Year: {studentInfo.year}</div>
            <br/>
            <ScheduleView {...availability}/>
            <br/>
            <div>Experience/Skills: {studentInfo.experience}</div>
            <br/>
            <div>Interests: {studentInfo.interests}</div>
            <button className="groups-button">Invite to Join Your Team</button>
            <BottomNav/>
        </div>
    )
}

const getStudentInfo = (courseID, studentID) => {
    // will be backend api call, for now just dummy data
    let availability: boolean[][] = [];
    for (let days = 0; days < 7; days++) {
        let dayArr: boolean[] = []
        for (let hour = 0; hour < 14; hour++) {
            if (hour + days == 2 || hour + days == 14) {
                dayArr.push(true);
            } else {
                dayArr.push(false);
            }
        }
        availability.push(dayArr);
    }
    return { 
        name: "Ben Jones",
        major: "Computer Science",
        year: "Sophomore",
        availability: availability,
        experience: "Have worked a lot with React",
        interests: "I like playing basketball and working out"
    };
}

export default StudentDetailedInfo;