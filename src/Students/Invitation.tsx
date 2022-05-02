import './student-styles.css';
import firebase from './../firebase.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Invitation = ({ name, user, courseID }) => {
    const [invitations, setInvitations] = useState<any>([]);
    const navigate = useNavigate();

    const fetchInvitations = async() => {
        if (user != undefined && courseID != undefined) {
            const response=firebase.db.collection('profiles').doc(user + courseID);
            await response.get()
            .then(doc => {
                const data = doc.data();
                if (data) {
                    setInvitations(data.invites);
                }
            })
        }
    }
    useEffect(() => {
        fetchInvitations();
    }, [])

    const handleAccept = async (name, user, courseID) => {
        await firebase.db.collection("profiles").doc(user + courseID).update({
            team: name,
        })
        navigate('/' + user + '/' + courseID + '/groups')
    }
    const handleDecline = async (name, user, courseID) => {
        let newArr: any = [];
        for (let x = 0; x < invitations.length; x++) {
            if (invitations[x] != name) {
                newArr.push(invitations[x]);
            }
        }
        console.log(newArr)
        await firebase.db.collection("profiles").doc(user + courseID).update({
            invites: newArr,
        })
        navigate(0);
    }
    return (
        <div className="invitation">
            <label className='invitation-label'>{name}</label>
            <button onClick={() => handleAccept(name, user, courseID)}>Accept</button>
            <button onClick={() => handleDecline(name, user, courseID)} className="invitation-decline">Decline</button>
        </div>
    )
}

export default Invitation;