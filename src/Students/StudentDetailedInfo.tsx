import { useParams } from "react-router-dom";
import BottomNav from "../BottomNav";
import ScheduleView from "../Schedule/ScheduleView";
import firebase from './../firebase.js';
import React,{useState,useEffect} from 'react';
import PageHeader from "../PageHeader";
import './../Groups/group-styles.css';

const StudentDetailedInfo = () => {
    const { courseID, studentID } = useParams();
    //const studentInfo = getStudentInfo(courseID, studentID);
    //const availability = { availability: studentInfo.availability };
    const [students,setStudents]=useState<any>([])
    const [profiles,setProfiles]=useState<any>([])
    //var fullArr: any[] = []
    const fetchStudents = async() => {
        const response=firebase.db.collection('students');
        const data = await response.get();
        console.log(data.docs);
        data.docs.forEach(item=>{
            //console.log(item.data());
            //console.log(item.data().courses);
            if (item.data().studentID === studentID) {
                console.log("Worked");
                setStudents([...students, item.data()]);
            } /*else {
                console.log("Not in");
            }*/
        }
        )  
    }
    useEffect(() => {
    fetchStudents();
    }, [])
    const fetchProfiles = async() => {
        const response2=firebase.db.collection('profiles');
        const data2 = await response2.get();
        console.log(data2.docs);
        data2.docs.forEach(item=>{
            if (item.data().studentID === studentID && item.data().course === courseID) {
                console.log("Worked Prof");
                setProfiles([...profiles, item.data()])
            }
        })
    }

    useEffect(() => {
    fetchProfiles();
    }, [])
    console.log("Student: ", students);
    console.log("Profile: ", profiles);
    //const studentInfo = getStudentInfo(courseID, studentID);
    //const availability = { availability: students.availability };
    if (students[0] && profiles[0]) {
        const availability = profiles[0].availability;
        console.log("Sched: ", availability);
        console.log(availability['Monday']);
        return (
            <div>
                <PageHeader title={students[0].name} hasBackArrow={true}/>
                <div>Major: {students[0].major}</div>
                <br/>
                <div>Year: {students[0].year}</div>
                <br/>
                <ScheduleView {...availability}/>
                <br/>
                <div>Experience/Skills: {profiles[0].experience}</div>
                <br/>
                <div>Interests: {profiles[0].interests}</div>
                <button className="detailed-groups-button">Invite to Join Your Team</button>
                <BottomNav/>
            </div>
        )
    } else {return null}
    } 

/*
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
*/

export default StudentDetailedInfo;