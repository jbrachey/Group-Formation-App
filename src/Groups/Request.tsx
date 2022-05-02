import './../Students/student-styles.css';
import firebase from './../firebase.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';

const Request = ({ profileID, profileName, groupName, courseID }) => {
    const [requests, setRequests] = useState<any>([]);
    const navigate = useNavigate();

    const fetchRequests = async() => {
        if (groupName != undefined && courseID != undefined) {
            const response=firebase.db.collection('groups').doc(groupName + courseID);
            await response.get()
            .then(doc => {
                const data = doc.data();
                if (data) {
                    setRequests(data.requests);
                }
            })
        }
    }
    useEffect(() => {
        fetchRequests();
    }, [])

    const handleAccept = async (profileID, groupName, courseID) => {
        await firebase.db.collection("profiles").doc(profileID).update({
            team: groupName,
        })
        let newRequests: any = [];
        for (let x = 0; x < requests.length; x++) {
            if (requests[x]['profileID'] != profileID) {
                newRequests.push(requests[x]);
            }
        }
        await firebase.db.collection("groups").doc(groupName + courseID).update({
            requests: newRequests,
        })
        navigate(0);
    }

    const handleDecline = async (profileID, groupName, courseID) => {
        let newRequests: any = [];
        for (let x = 0; x < requests.length; x++) {
            if (requests[x]['profileID'] != profileID) {
                newRequests.push(requests[x]);
            }
        }
        await firebase.db.collection("groups").doc(groupName + courseID).update({
            requests: newRequests,
        })
        navigate(0);
    }
    return (
        <div className="invitation">
            <label className='invitation-label'>{profileName}</label>
            <button onClick={() => handleAccept(profileID, groupName, courseID)}>Accept</button>
            <button onClick={() => handleDecline(profileID, groupName, courseID)} className="invitation-decline">Decline</button>
        </div>
    )
}

export default Request;