import React, { useEffect, useState } from "react";
import './student-styles.css';
import { useNavigate, useParams } from "react-router-dom";
import BottomNav from "../BottomNav";
import ConciseScheduleView from "../Schedule/ConciseScheduleView";
import StudentDisplayHeader from "./StudentDisplayHeader";
import firebase from './../firebase.js';

const StudentDisplay = ({studentID, name, major, year, availability, userIsInGroup, groupName}) => {
    console.log("StudDisplay: ", availability);
    const navigate = useNavigate();
    const { user, courseID } = useParams();
    const [invited, setInvited] = useState(false);
    const [invitations, setInvitations] = useState<any>([]);
    const navigationURL = '/' + user + '/' + courseID + '/student/' + studentID;

    var fullArr: any[] = [];
    const fetchInvitations = async () => {
        if (courseID != undefined) {
            const response=firebase.db.collection('profiles').doc(studentID + courseID)
            const data = await response.get()
            .then(doc => {
                const data = doc.data()
                if (data) {
                    if (data.invites.includes(groupName)) {
                        setInvited(true);
                    }
                    setInvitations(data.invites)
                }
            })
        }
    }

    useEffect(() => {
        fetchInvitations();
        }, [])

    const handleInvitation = (user, courseID, groupName) => {
        setInvited(true);
        // Here need to update invitations to have new invitation
        let tempInvitations: any = [];
        if (invitations != null && invitations[0] != null) {
            for (let x = 0; x < invitations.length; x++) {
                if (typeof invitations[x] == "object") {
                    for (let y = 0; y < invitations[x].length; y++) {
                        tempInvitations.push(invitations[x][y])
                    }
                } else {
                    tempInvitations.push(invitations[x]);
                }
            }
        }
        tempInvitations.push(groupName);
        console.log('user + courseID: ', user + courseID)
        console.log('invitations: ', tempInvitations)
        firebase.db.collection("profiles").doc(user + courseID).update({
            invites: tempInvitations,
        })
    }

    return (
        <div>
            <button onClick={() => {navigate(navigationURL)}} className="student-display">
                <StudentDisplayHeader name={name} />
                <text className="student-info">Major: {major}</text>
                <br/>
                <text className="student-info">Year: {year}</text>
                <br/>
                <ConciseScheduleView availability={availability} />
                <br/>
                {userIsInGroup && (
                    <button onClick={e => {
                        if (!invited) {
                            e.stopPropagation();
                            handleInvitation(studentID, courseID, groupName);
                        }
                        }} className="students-button">{invited ? "Invitation Pending" : "Invite to Your Team"}</button>
                )}
            </button>
        </div>
    )
}

export default StudentDisplay;