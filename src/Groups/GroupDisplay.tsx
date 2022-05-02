import './group-styles.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import ConciseScheduleView from '../Schedule/ConciseScheduleView';
import GroupDisplayHeader from './GroupDisplayHeader';
import { render } from '@testing-library/react';
import React,{useState,useEffect} from 'react';
import firebase from './../firebase.js';

const GroupDisplay = ({groupID, name, availability, neededExp, numStudents, totalStudents, requests}) => {
    const [profileName, setProfileName] = useState("");
    const navigate = useNavigate();
    const { user, courseID } = useParams();
    const navigationURL = '/' + user + '/' + courseID + '/group/' + groupID;

    const fetchProfileName = async () => {
        if (user != undefined) {
            const response=firebase.db.collection('students').doc(user);
            await response.get()
            .then(doc => {
                const data = doc.data();
                if (data) {
                    setProfileName(data.name);
                }
            })
        }
    }

    useEffect(() => {
        fetchProfileName();
    }, [])

    const checkRequests = () => {
        if (user != undefined && courseID != undefined) {
            let requested = false;
            for (let x = 0; x < requests.length; x++) {
                if (requests[x]['profileID'] == (user + courseID)) {
                    requested = true;
                }
            }
            if (requested) {
                return (<button onClick={e => e.stopPropagation()} className="groups-button">Request Pending</button>)
            } else {
                return (<button onClick={e => {
                    e.stopPropagation();
                    sendRequest(user, courseID, requests, profileName, groupID);
                }} className="groups-button">Request to Join Team</button>)
            }
        }
    }
    return (
        <div>
            <button onClick={() => {navigate(navigationURL)}} className="group-display">
                <GroupDisplayHeader name={name} numStudents={numStudents} totalStudents={totalStudents}/>
                <text className="group-info">Required Skills/Experience: {neededExp}</text>
                <br/>
                <ConciseScheduleView availability={availability} />
                <br/>
                {checkRequests()}
            </button>
        </div>
    )
}

export const sendRequest = (user, courseID, requests, profileName, groupID) => {
    if (user != undefined && courseID != undefined) {
        let currRequests = requests;
        let m = {};
        m['profileID'] = user + courseID;
        m['profileName'] = profileName;
        currRequests.push(m)
        firebase.db.collection("groups").doc(groupID).update({
            requests: currRequests,
        })
    }
}

export default GroupDisplay;