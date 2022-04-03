import ScheduleCol from "./ScheduleCol";
import './ScheduleStyles.css';

const ScheduleTable = () => {
    return (
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
            <ScheduleCol day="Mon"/>
            <ScheduleCol day="Tue"/>
            <ScheduleCol day="Wed"/>
            <ScheduleCol day="Thu"/>
            <ScheduleCol day="Fri"/>
            <ScheduleCol day="Sat"/>
            <ScheduleCol day="Sun"/>
        </div>
    )
}

export default ScheduleTable;