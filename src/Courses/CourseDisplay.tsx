import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import firebase from './../firebase.js';

const CourseDisplay = ({name, courseID, isProfessor}) => {
    const navigate = useNavigate();
    const { user } = useParams();
    const [hasProfile, setHasProfile] = useState(false);
    const getHasProfile = async () => {
        console.log('in get has profile')
        const response=firebase.db.collection('profiles').doc(user + courseID);
        await response.get()
        .then(doc => {
            if (!doc.exists) {
                setHasProfile(false);
            }
            const data = doc.data();
            if (data && data.course === courseID) {
                setHasProfile(true);
            } else {
                setHasProfile(false);
            }
        })
    }
    useEffect(() => {
        getHasProfile();
        }, [])
    return (
        <div>
            <button onClick={() => {
                if (isProfessor) {
                    navigate('/p/' + user + '/' + courseID);
                } else if (hasProfile) {
                    navigate('/' + user + '/' + courseID + '/groups');
                } else {
                    navigate('/' + user + '/' + courseID + '/makeprofile');
                }
                }} className="group-display">
                <div>{name}</div>
            </button>
        </div>
    )
}

export default CourseDisplay;