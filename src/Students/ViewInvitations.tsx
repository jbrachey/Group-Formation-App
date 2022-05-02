import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import BottomNav from "../BottomNav";
import PageHeader from "../PageHeader";
import firebase from './../firebase.js';
import Invitation from "./Invitation";

const ViewInvitations = () => {
    const { user, courseID } = useParams();
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

    return(
        <div>
            <PageHeader title={"Invitations"} hasBackArrow={false} />
            <ul>
                {invitations[0] && invitations.map(invitation => {
                    return (
                    <li key={invitation}>
                        <Invitation name={invitation} user={user} courseID={courseID}/>
                    </li>
                    )
                })}
            </ul>
            <BottomNav />
        </div>
    )
}

export default ViewInvitations;