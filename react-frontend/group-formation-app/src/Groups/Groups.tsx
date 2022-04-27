import React from "react";
import BottomNav from "../BottomNav";
import GroupDisplay from "./GroupDisplay";
import { useParams } from "react-router-dom";

const Groups = () => {
    const { courseID } = useParams();
    const groups = getGroups(courseID);
    return (
        <div>
            <h1 className="App-header App-h1">Open Groups</h1>
            {groups.map(group => {
                return (
                <li key={group.groupID}>
                    <GroupDisplay groupID={group.groupID} name={group.name} availability={group.availability} neededExp={group.neededExp} numStudents={group.numStudents} totalStudents={group.totalStudents}/>
                </li>
                )
            })}
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
        availability: schedule1,
        neededExp: "React coding",
        numStudents: 3,
        totalStudents: 4
    };
    let group2 = {
        groupID: 2,
        name: "Cool team", 
        availability: schedule2,
        neededExp: "Anything",
        numStudents: 1,
        totalStudents: 4
    };
    let group3 = {
        groupID: 3,
        name: "APPteam", 
        availability: schedule3,
        neededExp: "backend",
        numStudents: 2,
        totalStudents: 5
    };
    let group4 = {
        groupID: 4,
        name: "Cool Kids", 
        availability: schedule4,
        neededExp: "Frontend on iOS",
        numStudents: 3,
        totalStudents: 5
    };
    return [group1, group2, group3, group4];
}

export default Groups;