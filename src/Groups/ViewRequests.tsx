import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import BottomNav from "../BottomNav";
import PageHeader from "../PageHeader";
import firebase from './../firebase.js';
import Request from "./Request";

const ViewRequests = () => {
    const { user, courseID, groupname } = useParams();
    const [requests, setRequests] = useState<any>([]);
    const navigate = useNavigate();

    const fetchRequests = async() => {
        console.log('in fetch request')

        if (courseID != undefined && groupname != undefined) {
            console.log('through if statement')
            const response=firebase.db.collection('groups').doc(groupname + courseID);
            await response.get()
            .then(doc => {
                const data = doc.data();
                if (data) {
                    console.log('requests: ', data.requests)
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
                    console.log("request: ", request)
                    return (
                    <li key={request['profileID']}>
                        <Request profileID={request['profileID']} profileName={request['profileName']} groupName={groupname} courseID={courseID}/>
                    </li>
                    )
                })}
            </ul>
            <BottomNav />
        </div>
    )
}

export default ViewRequests;