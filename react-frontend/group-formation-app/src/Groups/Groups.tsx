import React from "react";
import BottomNav from "../BottomNav";
import GroupDisplay from "./GroupDisplay";
import { useParams } from "react-router-dom";
import PageHeader from "../PageHeader";

const Groups = () => {
    const { courseID } = useParams();
    const groups = getGroups(courseID);
    return (
        <div>
            <PageHeader title={"Open Groups"} hasBackArrow={false} />
            <ul>
                {groups.map(group => {
                    return (
                    <li key={group.groupID}>
                        <GroupDisplay groupID={group.groupID} name={group.name} availability={group.availability} neededExp={group.neededExp} numStudents={group.numStudents} totalStudents={group.totalStudents}/>
                    </li>
                    )
                })}
            </ul>
            <BottomNav/>
        </div>

    )
}

const getGroups = (courseID) => {
    // This method will need to make an api call, just dummy groups for now
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
    let group1 = {
        groupID: 1,
        name: "Concrete Conglomerate " + courseID, 
        availability: availability,
        neededExp: "React coding",
        numStudents: 3,
        totalStudents: 4
    };
    let group2 = {
        groupID: 2,
        name: "Cool team", 
        availability: availability,
        neededExp: "Anything",
        numStudents: 1,
        totalStudents: 4
    };
    let group3 = {
        groupID: 3,
        name: "APPteam", 
        availability: availability,
        neededExp: "backend",
        numStudents: 2,
        totalStudents: 5
    };
    let group4 = {
        groupID: 4,
        name: "Cool Kids", 
        availability: availability,
        neededExp: "Frontend on iOS",
        numStudents: 3,
        totalStudents: 5
    };
    return [group1, group2, group3, group4];
}

export default Groups;