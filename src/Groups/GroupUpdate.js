import { useEffect, useState } from "react";
import './../App.css';
import PageHeader from './../PageHeader';
import firebase from './../firebase.js';
import './../Groups/group-styles.css';
import { useNavigate, useParams } from "react-router";
import BottomNav from "../BottomNav";

let falses = [];
for (let days = 0; days < 7; days++) {
    let falseArr = []
    for (let hour = 0; hour < 14; hour++) {
        falseArr.push(false);
    }
    falses.push(falseArr);
}

const GroupUpdate = () => {
    const [name, setName] = useState("");
    const [nameChanged, setNameChanged] = useState(false);
    const [goals, setGoals] = useState("");
    const [goalsChanged, setGoalsChanged] = useState(false);
    const [neededExp, setNeededExp] = useState("");
    const [neededExpChanged, setNeededExpChanged] = useState(false);
    const [availability, setAvailability] = useState(falses);
    const [availabilityChanged, setAvailabilityChanged] = useState(false);

    const { user, courseID, groupname } = useParams();

    const navigate = useNavigate();

    const changeAvailability = (day, hour) => {
        let copyArr = [...availability];
        if (availability[day][hour]) {
            copyArr[day][hour] = false;
        } else {
            copyArr[day][hour] = true;
        }
        setAvailability(copyArr);
        setAvailabilityChanged(true);
    }

    const fetchGroup = async () => {
        console.log('fetch group')
        const response=firebase.db.collection('groups').doc(groupname + courseID)
        await response.get()
        .then(doc => {
            const data = doc.data();
            console.log(data)
            if (data) {
                setName(data.name);
                setGoals(data.goals);
                setNeededExp(data.neededExp)
                const availability = data.availability;
                const availArr = [];
                availArr.push(availability['Monday'])
                availArr.push(availability['Tuesday'])
                availArr.push(availability['Wednesday'])
                availArr.push(availability['Thursday'])
                availArr.push(availability['Friday'])
                availArr.push(availability['Saturday'])
                availArr.push(availability['Sunday'])
                setAvailability(availArr);
            }
            
        })
    }

    useEffect(() => {
        fetchGroup();
        }, [])

    const updateGroup = async (name, goals, neededExp, availability) => {
        const availMap = {}
        availMap["Monday"] = availability[0];
        availMap["Tuesday"] = availability[1];
        availMap["Wednesday"] = availability[2];
        availMap["Thursday"] = availability[3];
        availMap["Friday"] = availability[4];
        availMap["Saturday"] = availability[5];
        availMap["Sunday"] = availability[6];
        if (nameChanged) {
            firebase.db.collection("groups").doc(groupname + courseID).set({
                name: name,
                goals: goals,
                neededExp: neededExp,
                availability: availMap
            });
        } else {
            firebase.db.collection("groups").doc(groupname + courseID).update({
                name: name,
                goals: goals,
                neededExp: neededExp,
                availability: availMap
            });
        }
        navigate('/' + user + '/' + courseID + '/groups')
    }

    return (
        <div className="group-creation-form">
            <PageHeader title={"Profile Creation"} hasBackArrow={false} />
            <label htmlFor="name">Name:</label>
            <br></br>
            <input value={name}type="text" id="name" name="name" onChange={e => {
                setName(e.target.value);
                setNameChanged(true);
                }}/>
            <br></br>
            <br></br>
            <label htmlFor="goals">Goals:</label>
            <br></br>
            <input value={goals} type="text" id="goals" name="goals" onChange={e => {
                setGoals(e.target.value);
                setGoalsChanged(true)}}/>
            <br></br>
            <br></br>
            <label htmlFor="neededExp">Needed Experience:</label>
            <br></br>
            <input value={neededExp} type="text" id="neededExp" name="neededExp" onChange={e => {
                setNeededExp(e.target.value);
                setNeededExpChanged(true)}}/>
            <br></br>
            <br></br>
            <label htmlFor="schedule">Schedule Availability:</label>
            <br></br>
            <div className="table-style">
                <div className="times">
                    <label>8 AM</label>
                    <label>9 AM</label>
                    <label>10 AM</label>
                    <label>11 AM</label>
                    <label>12 PM</label>
                    <label>1 PM</label>
                    <label>2 PM</label>
                    <label>3 PM</label>
                    <label>4 PM</label>
                    <label>5 PM</label>
                    <label>6 PM</label>
                    <label>7 PM</label>
                    <label>8 PM</label>
                    <label>9 PM</label>
                </div>
                <div className="schedule-col">
                    <label>Mon</label>
                    <button className={availability[0][0] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(0, 0)}}/>
                    <button className={availability[0][1] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(0, 1)}}/>
                    <button className={availability[0][2] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(0, 2)}}/>
                    <button className={availability[0][3] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(0, 3)}}/>
                    <button className={availability[0][4] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(0, 4)}}/>
                    <button className={availability[0][5] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(0, 5)}}/>
                    <button className={availability[0][6] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(0, 6)}}/>
                    <button className={availability[0][7] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(0, 7)}}/>
                    <button className={availability[0][8] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(0, 8)}}/>
                    <button className={availability[0][9] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(0, 9)}}/>
                    <button className={availability[0][10] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(0, 10)}}/>
                    <button className={availability[0][11] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(0, 11)}}/>
                    <button className={availability[0][12] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(0, 12)}}/>
                    <button className={availability[0][13] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(0, 13)}}/>
                </div>
                <div className="schedule-col">
                    <label>Tue</label>
                    <button className={availability[1][0] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(1, 0)}}/>
                    <button className={availability[1][1] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(1, 1)}}/>
                    <button className={availability[1][2] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(1, 2)}}/>
                    <button className={availability[1][3] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(1, 3)}}/>
                    <button className={availability[1][4] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(1, 4)}}/>
                    <button className={availability[1][5] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(1, 5)}}/>
                    <button className={availability[1][6] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(1, 6)}}/>
                    <button className={availability[1][7] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(1, 7)}}/>
                    <button className={availability[1][8] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(1, 8)}}/>
                    <button className={availability[1][9] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(1, 9)}}/>
                    <button className={availability[1][10] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(1, 10)}}/>
                    <button className={availability[1][11] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(1, 11)}}/>
                    <button className={availability[1][12] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(1, 12)}}/>
                    <button className={availability[1][13] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(1, 13)}}/>
                </div>
                <div className="schedule-col">
                    <label>Wed</label>
                    <button className={availability[2][0] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(2, 0)}}/>
                    <button className={availability[2][1] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(2, 1)}}/>
                    <button className={availability[2][2] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(2, 2)}}/>
                    <button className={availability[2][3] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(2, 3)}}/>
                    <button className={availability[2][4] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(2, 4)}}/>
                    <button className={availability[2][5] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(2, 5)}}/>
                    <button className={availability[2][6] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(2, 6)}}/>
                    <button className={availability[2][7] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(2, 7)}}/>
                    <button className={availability[2][8] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(2, 8)}}/>
                    <button className={availability[2][9] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(2, 9)}}/>
                    <button className={availability[2][10] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(2, 10)}}/>
                    <button className={availability[2][11] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(2, 11)}}/>
                    <button className={availability[2][12] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(2, 12)}}/>
                    <button className={availability[2][13] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(2, 13)}}/>
                </div>
                <div className="schedule-col">
                    <label>Thu</label>
                    <button className={availability[3][0] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(3, 0)}}/>
                    <button className={availability[3][1] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(3, 1)}}/>
                    <button className={availability[3][2] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(3, 2)}}/>
                    <button className={availability[3][3] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(3, 3)}}/>
                    <button className={availability[3][4] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(3, 4)}}/>
                    <button className={availability[3][5] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(3, 5)}}/>
                    <button className={availability[3][6] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(3, 6)}}/>
                    <button className={availability[3][7] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(3, 7)}}/>
                    <button className={availability[3][8] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(3, 8)}}/>
                    <button className={availability[3][9] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(3, 9)}}/>
                    <button className={availability[3][10] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(3, 10)}}/>
                    <button className={availability[3][11] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(3, 11)}}/>
                    <button className={availability[3][12] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(3, 12)}}/>
                    <button className={availability[3][13] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(3, 13)}}/>
                </div>
                <div className="schedule-col">
                    <label>Fri</label>
                    <button className={availability[4][0] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(4, 0)}}/>
                    <button className={availability[4][1] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(4, 1)}}/>
                    <button className={availability[4][2] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(4, 2)}}/>
                    <button className={availability[4][3] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(4, 3)}}/>
                    <button className={availability[4][4] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(4, 4)}}/>
                    <button className={availability[4][5] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(4, 5)}}/>
                    <button className={availability[4][6] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(4, 6)}}/>
                    <button className={availability[4][7] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(4, 7)}}/>
                    <button className={availability[4][8] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(4, 8)}}/>
                    <button className={availability[4][9] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(4, 9)}}/>
                    <button className={availability[4][10] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(4, 10)}}/>
                    <button className={availability[4][11] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(4, 11)}}/>
                    <button className={availability[4][12] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(4, 12)}}/>
                    <button className={availability[4][13] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(4, 13)}}/>
                </div>
                <div className="schedule-col">
                    <label>Sat</label>
                    <button className={availability[5][0] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(5, 0)}}/>
                    <button className={availability[5][1] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(5, 1)}}/>
                    <button className={availability[5][2] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(5, 2)}}/>
                    <button className={availability[5][3] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(5, 3)}}/>
                    <button className={availability[5][4] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(5, 4)}}/>
                    <button className={availability[5][5] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(5, 5)}}/>
                    <button className={availability[5][6] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(5, 6)}}/>
                    <button className={availability[5][7] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(5, 7)}}/>
                    <button className={availability[5][8] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(5, 8)}}/>
                    <button className={availability[5][9] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(5, 9)}}/>
                    <button className={availability[5][10] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(5, 10)}}/>
                    <button className={availability[5][11] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(5, 11)}}/>
                    <button className={availability[5][12] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(5, 12)}}/>
                    <button className={availability[5][13] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(5, 13)}}/>
                </div>
                <div className="schedule-col">
                    <label>Sun</label>
                    <button className={availability[6][0] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(6, 0)}}/>
                    <button className={availability[6][1] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(6, 1)}}/>
                    <button className={availability[6][2] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(6, 2)}}/>
                    <button className={availability[6][3] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(6, 3)}}/>
                    <button className={availability[6][4] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(6, 4)}}/>
                    <button className={availability[6][5] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(6, 5)}}/>
                    <button className={availability[6][6] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(6, 6)}}/>
                    <button className={availability[6][7] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(6, 7)}}/>
                    <button className={availability[6][8] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(6, 8)}}/>
                    <button className={availability[6][9] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(6, 9)}}/>
                    <button className={availability[6][10] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(6, 10)}}/>
                    <button className={availability[6][11] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(6, 11)}}/>
                    <button className={availability[6][12] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(6, 12)}}/>
                    <button className={availability[6][13] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(6, 13)}}/>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            { (nameChanged || goalsChanged || neededExpChanged || availabilityChanged) &&
            <button onClick={() => {updateGroup(name, goals, neededExp, availability)}} className="App-CreateButton">Update Group</button>
            }
            <BottomNav />
        </div>
    )
}

export default GroupUpdate;