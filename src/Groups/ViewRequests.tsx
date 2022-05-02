import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import BottomNav from "../BottomNav";
import PageHeader from "../PageHeader";
import firebase from './../firebase.js';
import Request from "./Request";

const ViewRequests = () => {
    const { user, courseID, groupName } = useParams();
    const [requests, setRequests] = useState<any>([]);
    const navigate = useNavigate();

    const fetchRequests = async() => {
        if (courseID != undefined && groupName != undefined) {
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

    return(
        <div>
            <PageHeader title={"Requests"} hasBackArrow={false} />
            <ul>
                {requests[0] && requests.map(request => {
                    return (
                    <li key={request['profileID']}>
                        <Request profileID={request['profileID']} profileName={request['profileName']} groupName={groupName} courseID={courseID}/>
                    </li>
                    )
                })}
            </ul>
            <BottomNav />
        </div>
    )
}

export default ViewRequests;