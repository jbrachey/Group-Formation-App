import './group-styles.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import ConciseScheduleView from '../Schedule/ConciseScheduleView';
import GroupDisplayHeader from './GroupDisplayHeader';
import { render } from '@testing-library/react';
import React,{useState,useEffect} from 'react';
import firebase from './../firebase.js';

const GroupDisplay = ({groupID, name, availability, neededExp, numStudents, totalStudents, requests}) => {
    console.log("Display requests: ", requests);
    const navigate = useNavigate();
    const { user, courseID } = useParams();
    const navigationURL = '/' + user + '/' + courseID + '/group/' + groupID;
    const checkRequests = () => {
        if (requests.includes(user)) {
            return (<button className="groups-button">Request Pending</button>)
        } else {
            return (<button onClick={sendRequest} className="groups-button">Request to Join Team</button>)
        }
    }
    const sendRequest = () => {
        var currRequests = requests;
        console.log("Success1")
        currRequests.push(user)
        firebase.db.collection("groups").doc(groupID).update({
            requests: currRequests,
        })
        console.log("Success2")
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

export default GroupDisplay;