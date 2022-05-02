import BottomNav from "../BottomNav";
import GroupDisplay from "./GroupDisplay";
import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "../PageHeader";
import firebase from './../firebase.js';
import React,{useState,useEffect} from 'react';

const Groups = () => {
    const { user, courseID } = useParams();
    /*
    firebase.db.collection("groups").doc("Concrete Conglomerate").set({
        goals: "Get an A",
        groupID: "Concrete Conglomerate",
        name: "Concrete Conglomerate",
        max: 5,
        numStudents: 4,
        neededExp: "Nothing were perfect",
        random: false,
        availability: {"Monday": [true, true, true, true, true, true, true, true, true, true, true, true, true, true], "Tuesday":[true, true, true, true, true, true, true, true, true, true, true, true, true, true],"Wednesday": [true, true, true, true, true, true, true, true, true, true, true, true, true, true], "Thursday":[true, true, true, true, true, true, true, true, true, true, true, true, true, true],"Friday": [true, true, true, true, true, true, true, true, true, true, true, true, true, true], "Saturday":[true, true, true, true, true, true, true, true, true, true, true, true, true, true],"Sunday": [true, true, true, true, true, true, true, true, true, true, true, true, true, true]}
    })
    */
    //const groups = getGroups(courseID);
    const [groups,setGroups]=useState<any>([])
    const [userIsInGroup, setUserIsInGroup] = useState(false);
    const [groupName, setGroupName] = useState('');
    const navigate = useNavigate();
    var fullArr: any[] = []
    const fetchGroups = async() => {
        const response=firebase.db.collection('groups').where("courseID", "==", courseID);
        const data = await response.get();
        //console.log(data.docs);
        data.docs.forEach(item=>{
            //console.log(item.data());
            //console.log(item.data().courses);
            fullArr.push(item.data());
        })
        setGroups([...groups, fullArr])
        
    }
    useEffect(() => {
    fetchGroups();
    }, [])
    const inGroup = async () => {
        if (user != undefined && courseID != undefined) {
            const response=firebase.db.collection('profiles').doc(user + courseID);
            await response.get()
            .then(doc => {
                if (!doc.exists) {
                    setUserIsInGroup(false);
                }
                const data = doc.data();
                if (data && data.team != 'None') {
                    setUserIsInGroup(true);
                    setGroupName(data.team);
                } else {
                    setUserIsInGroup(false);
                }
            })
        }
    }
    useEffect(() => {
        inGroup();
        }, [])
    console.log(groups);
    console.log('Groups:', groups[0]);
    return (
        <div>
            <PageHeader title={"Open Groups"} hasBackArrow={false} />
            {!userIsInGroup && ( <ul>
                {groups[0] && groups[0].map(group => {
                    console.log("Inner group: ", group.requests);
                    return (
                    <li key={group.groupID}>
                        <GroupDisplay groupID={group.groupID} name={group.name} availability={group.availability} neededExp={group.neededExp} numStudents={group.numStudents} totalStudents={group.totalStudents} requests={group.requests} />
                    </li>
                    )
                }) && 
                (
                    <div>
                        <button onClick={() => navigate('/' + user + '/' + courseID + '/groupcreation')}>Create Group</button>
                    </div>
                )}
            </ul>)}
            {userIsInGroup && ( 
                <div>
                    <label>You are in group {groupName}!</label>
                    <br/>
                    <br/>
                    <button onClick={() => navigate('/' + user + '/' + courseID + '/' + groupName + '/groupupdate')}>Update Group</button>
                </div>
            )}
            <BottomNav/>
        </div>

    )
}
/*
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
*/
export default Groups;