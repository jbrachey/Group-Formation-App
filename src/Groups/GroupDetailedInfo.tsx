import { useParams } from "react-router";
import BottomNav from "../BottomNav";
import ScheduleView from "../Schedule/ScheduleView";
import './group-styles.css';
import firebase from './../firebase.js';
import React,{useState,useEffect} from 'react';
import PageHeader from "../PageHeader";

const GroupDetailedInfo = () => {
    const { courseID, groupID } = useParams();
    //const groupInfo = getGroupInfo(courseID, groupID);
    //const availability = { availability: groupInfo.availability };
    const [groups,setGroups]=useState<any>([])
    var fullArr: any[] = []
    const fetchGroups = async() => {
        const response=firebase.db.collection('groups');
        const data = await response.get();
        console.log(data.docs);
        data.docs.forEach(item=>{
            console.log(item.data());
            console.log(item.data().courses);
            if (item.data().groupID === groupID) {
                setGroups([...groups, item.data()]);
            }
        })
        
    }
    useEffect(() => {
    fetchGroups();
    }, [])
    console.log('Groups:', groups);
    if (groups[0]) {
    const availability = groups[0].availability;
    return (
        <div>
            <PageHeader title={groups[0].name} hasBackArrow={true}/>
            <div>Group goals: {groups[0].goals}</div>
            <br/>
            <div>Needed experience: {groups[0].neededExp}</div>
            <br/>
            <ScheduleView {...availability}/>
            <button className="detailed-groups-button">Request to Join Team</button>
            <BottomNav/>
        </div>
    )
} else {return null}
}
/*
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
*/
export default GroupDetailedInfo;