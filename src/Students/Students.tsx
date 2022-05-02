import { useNavigate, useParams } from "react-router";
import StudentDisplay from "./StudentDisplay";
import BottomNav from "../BottomNav";
import PageHeader from "../PageHeader";
import firebase from './../firebase.js';
import React,{useState,useEffect} from 'react';

const Students = () => {
    const { user, courseID } = useParams();
    //const students = getStudents(courseID);
    const [students,setStudents]=useState<any>([])
    const [profiles,setProfiles]=useState<any>([])
    const [userIsInGroup, setUserIsInGroup] = useState(true);
    const [groupName, setGroupName] = useState("");
    const navigate = useNavigate();
    var fullArr: any[] = []
    const fetchStudents = async() => {
        const response=firebase.db.collection('students');
        const data = await response.get();
        console.log(data.docs);
        data.docs.forEach(item=>{
            //console.log(item.data());
            //console.log(item.data().courses);
            if (item.data().courses.includes(courseID)) {
                //console.log("Worked");
                fullArr.push(item.data());
            }
        })
        setStudents([...students, fullArr])
    }
    useEffect(() => {
    fetchStudents();
    }, [])
    console.log('Students:', students);

    var proMap = new Map()
    const fetchProfiles = async() => {
        const response2=firebase.db.collection('profiles');
        const data2 = await response2.get();
        //console.log(data2.docs);
        data2.docs.forEach(item=>{
            const data = item.data()
            if (data.course === courseID) {
                if (data.studentID === user) {
                    if (data.team == "None") {
                        setUserIsInGroup(false);
                    } else {
                        setGroupName(data.team);
                        setUserIsInGroup(true);
                    }
                }
                const arr: any[] = []
                arr.push(item.data().availability);
                const group = item.data().team;
                if (group == 'None') {
                    arr.push(false)
                } else {
                    arr.push(true)
                }
                proMap[item.data().studentID] = arr;
            }
        })
        setProfiles([...profiles, proMap])
    }
    useEffect(() => {
    fetchProfiles();
    }, [])
    console.log("Promap: ",profiles[0])
    return (
        <div>
            <PageHeader title={"Available Students"} hasBackArrow={false} />
            <ul>
                {students[0] && profiles[0] && students[0].map(student=> {
                    console.log('student: ', student)
                    console.log('profiles: ', profiles)
                    if (student.studentID !== user && !profiles[0][student.studentID][1]) {
                        return (
                            <li key={student.studentID}>
                                <StudentDisplay studentID={student.studentID} name={student.name} major={student.major} year={student.year} availability={profiles[0][student.studentID][0]} userIsInGroup={userIsInGroup} groupName={groupName}/>
                            </li>
                        )
                    }
                })}
            </ul>
            {!userIsInGroup && (
                <div>
                    <br/>
                    <button onClick={() => navigate('/' + user + '/' + courseID + '/viewinvitations')}>View Invitations</button>
                </div>
            )}
            <BottomNav/>
        </div>

    )
}
/*
const getStudents = (courseID) => {
    // will be backend api call, for now dummy data
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
    const student1 = {
        studentID: 1,
        name: "Parker Jones",
        major: "Computer science",
        year: "2nd",
        availability: availability
    };
    const student2 = {
        studentID: 2,
        name: "Jose Alvarado",
        major: "Business",
        year: "4th",
        availability: availability
    };
    const student3 = {
        studentID: 3,
        name: "Ben",
        major: "ME",
        year: "Junior",
        availability: availability
    };
    return [student1, student2, student3];
}
*/
export default Students;