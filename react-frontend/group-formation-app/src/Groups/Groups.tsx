import React from "react";
import BottomNav from "../BottomNav";
import GroupDisplay from "./GroupDisplay";
import { useParams } from "react-router-dom";

const Groups = () => {
    const { courseID } = useParams()
    const arr = [true, false, true, true];
    const groups = getGroups(courseID);
    return (
        <div>
            <h1 className="App-header App-h1">Open Groups</h1>
            {groups.map(group => {
                return (
                <li key={group.groupID}>
                    <GroupDisplay groupID={group.groupID} name={group.name} schedule={group.schedule} neededExp={group.neededExp} numStudents={group.numStudents} totalStudents={group.totalStudents}/>
                </li>
                )
            })}
            { /*
            <div className="App-group">Concrete Conglomerate
                <br></br>
                <img src=""></img>
                <br></br>
                <text className="App-group-info">Required Skills/Experience: Python</text>
                <br></br>
                <button className="App-groupsButton">Join Team</button>
            </div>
            <br></br>
            <br></br>
            <div className="App-group">Unnamed Team
                <br></br>
                <img src=""></img>
                <br></br>
                <text className="App-group-info">Required Skills/Experience: Java</text>
                <br></br>
                <button className="App-groupsButton">Join Team</button>
            </div>
            <br></br>
            <br></br>
            <div className="App-group">Team Supreme
                <br></br>
                <img src=""></img>
                <br></br>
                <text className="App-group-info">Required Skills/Experience: C++</text>
                <br></br>
                <button className="App-groupsButton">Join Team</button>
            </div>
        */ }
            <BottomNav/>
        </div>

    )
}

const getGroups = (courseID) => {
    // This method will need to make an api call, just dummy groups for now
    const schedule1 = [true, false, true, false]
    const schedule2 = [true, false, true, true]
    const schedule3 = [true, true, true, false]
    const schedule4 = [false, false, true, true]
    let group1 = {
        groupID: 1,
        name: "Concrete Conglomerate " + courseID, 
        schedule: schedule1,
        neededExp: "React coding",
        numStudents: 3,
        totalStudents: 4
    };
    let group2 = {
        groupID: 2,
        name: "Cool team", 
        schedule: schedule2,
        neededExp: "Anything",
        numStudents: 1,
        totalStudents: 4
    };
    let group3 = {
        groupID: 3,
        name: "APPteam", 
        schedule: schedule3,
        neededExp: "backend",
        numStudents: 2,
        totalStudents: 5
    };
    let group4 = {
        groupID: 4,
        name: "Cool Kids", 
        schedule: schedule4,
        neededExp: "Frontend on iOS",
        numStudents: 3,
        totalStudents: 5
    };
    return [group1, group2, group3, group4];
}

export default Groups;