import { useState } from "react";
import './ScheduleStyles.css';

const falses = [false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const ScheduleCol = ({day}) => {
    const [dayAvailability, updateDayAvailability] = useState(falses);
    const changeAvailability = (hour: number) => {
        let copyArr = [...dayAvailability];
        if (dayAvailability[hour]) {
            copyArr[hour] = false;
        } else {
            copyArr[hour] = true;
        }
        updateDayAvailability(copyArr);
    }
    return (
        <div className="schedule-col">
            <label>{day}</label>
            <button className={dayAvailability[0] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(0)}}/>
            <button className={dayAvailability[1] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(1)}}/>
            <button className={dayAvailability[2] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(2)}}/>
            <button className={dayAvailability[3] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(3)}}/>
            <button className={dayAvailability[4] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(4)}}/>
            <button className={dayAvailability[5] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(5)}}/>
            <button className={dayAvailability[6] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(6)}}/>
            <button className={dayAvailability[7] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(7)}}/>
            <button className={dayAvailability[8] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(8)}}/>
            <button className={dayAvailability[9] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(9)}}/>
            <button className={dayAvailability[10] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(10)}}/>
            <button className={dayAvailability[11] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(11)}}/>
            <button className={dayAvailability[12] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(12)}}/>
            <button className={dayAvailability[13] ? "available-time" : "unavailable-time"} onClick={() => {changeAvailability(13)}}/>
        </div>
    )
}

export default ScheduleCol;