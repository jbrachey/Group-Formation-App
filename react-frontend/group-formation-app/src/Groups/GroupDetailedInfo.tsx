import { useParams } from "react-router";
import BottomNav from "../BottomNav";
import ScheduleView from "../Schedule/ScheduleView";
import './group-styles.css';

const GroupDetailedInfo = () => {
    const { courseID, groupID } = useParams();
    const groupInfo = getGroupInfo(courseID, groupID);
    const availability = { availability: groupInfo.availability };
    return (
        <div>
            <div>{groupInfo.name}</div>
            <br/>
            <div>Group goals: {groupInfo.goals}</div>
            <br/>
            <div>Needed experience: {groupInfo.neededExp}</div>
            <br/>
            <ScheduleView {...availability}/>
            <button className="groups-button">Request to Join Team</button>
            <BottomNav/>
        </div>
    )
}

const getGroupInfo = (courseID, groupID) => {
    // This will be backend api call to get the actual group's info,
    // for now just dummy data
    let availability: boolean[][] = [];
    for (let days = 0; days < 7; days++) {
        let dayArr: boolean[] = []
        for (let hour = 0; hour < 14; hour++) {
            if (hour + days == 5 || hour + days == 12) {
                dayArr.push(true);
            } else {
                dayArr.push(false);
            }
        }
        availability.push(dayArr);
    }
    return { 
        name: "Concrete Conglomerate",
        goals: "Do well on project",
        neededExp: "React and Python",
        availability: availability,
        filledRandomly: false
    };
}

export default GroupDetailedInfo;