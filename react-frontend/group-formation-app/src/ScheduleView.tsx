import './Groups/group-styles.css';

const ScheduleView = ({availability}) => {
    console.log("in schedule view")
    console.log(availability);
    console.log(availability[0][0])
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
            <div className="schedule-col">
                <label>Mon</label>
                <button className={availability[0][0] ? "available-time" : "unavailable-time"} />
                <button className={availability[0][1] ? "available-time" : "unavailable-time"} />
                <button className={availability[0][2] ? "available-time" : "unavailable-time"} />
                <button className={availability[0][3] ? "available-time" : "unavailable-time"} />
                <button className={availability[0][4] ? "available-time" : "unavailable-time"} />
                <button className={availability[0][5] ? "available-time" : "unavailable-time"} />
                <button className={availability[0][6] ? "available-time" : "unavailable-time"} />
                <button className={availability[0][7] ? "available-time" : "unavailable-time"} />
                <button className={availability[0][8] ? "available-time" : "unavailable-time"} />
                <button className={availability[0][9] ? "available-time" : "unavailable-time"} />
                <button className={availability[0][10] ? "available-time" : "unavailable-time"} />
                <button className={availability[0][11] ? "available-time" : "unavailable-time"} />
                <button className={availability[0][12] ? "available-time" : "unavailable-time"} />
                <button className={availability[0][13] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="schedule-col">
                <label>Tue</label>
                <button className={availability[1][0] ? "available-time" : "unavailable-time"} />
                <button className={availability[1][1] ? "available-time" : "unavailable-time"} />
                <button className={availability[1][2] ? "available-time" : "unavailable-time"} />
                <button className={availability[1][3] ? "available-time" : "unavailable-time"} />
                <button className={availability[1][4] ? "available-time" : "unavailable-time"} />
                <button className={availability[1][5] ? "available-time" : "unavailable-time"} />
                <button className={availability[1][6] ? "available-time" : "unavailable-time"} />
                <button className={availability[1][7] ? "available-time" : "unavailable-time"} />
                <button className={availability[1][8] ? "available-time" : "unavailable-time"} />
                <button className={availability[1][9] ? "available-time" : "unavailable-time"} />
                <button className={availability[1][10] ? "available-time" : "unavailable-time"} />
                <button className={availability[1][11] ? "available-time" : "unavailable-time"} />
                <button className={availability[1][12] ? "available-time" : "unavailable-time"} />
                <button className={availability[1][13] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="schedule-col">
                <label>Wed</label>
                <button className={availability[2][0] ? "available-time" : "unavailable-time"} />
                <button className={availability[2][1] ? "available-time" : "unavailable-time"} />
                <button className={availability[2][2] ? "available-time" : "unavailable-time"} />
                <button className={availability[2][3] ? "available-time" : "unavailable-time"} />
                <button className={availability[2][4] ? "available-time" : "unavailable-time"} />
                <button className={availability[2][5] ? "available-time" : "unavailable-time"} />
                <button className={availability[2][6] ? "available-time" : "unavailable-time"} />
                <button className={availability[2][7] ? "available-time" : "unavailable-time"} />
                <button className={availability[2][8] ? "available-time" : "unavailable-time"} />
                <button className={availability[2][9] ? "available-time" : "unavailable-time"} />
                <button className={availability[2][10] ? "available-time" : "unavailable-time"} />
                <button className={availability[2][11] ? "available-time" : "unavailable-time"} />
                <button className={availability[2][12] ? "available-time" : "unavailable-time"} />
                <button className={availability[2][13] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="schedule-col">
                <label>Thu</label>
                <button className={availability[3][0] ? "available-time" : "unavailable-time"} />
                <button className={availability[3][1] ? "available-time" : "unavailable-time"} />
                <button className={availability[3][2] ? "available-time" : "unavailable-time"} />
                <button className={availability[3][3] ? "available-time" : "unavailable-time"} />
                <button className={availability[3][4] ? "available-time" : "unavailable-time"} />
                <button className={availability[3][5] ? "available-time" : "unavailable-time"} />
                <button className={availability[3][6] ? "available-time" : "unavailable-time"} />
                <button className={availability[3][7] ? "available-time" : "unavailable-time"} />
                <button className={availability[3][8] ? "available-time" : "unavailable-time"} />
                <button className={availability[3][9] ? "available-time" : "unavailable-time"} />
                <button className={availability[3][10] ? "available-time" : "unavailable-time"} />
                <button className={availability[3][11] ? "available-time" : "unavailable-time"} />
                <button className={availability[3][12] ? "available-time" : "unavailable-time"} />
                <button className={availability[3][13] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="schedule-col">
                <label>Fri</label>
                <button className={availability[4][0] ? "available-time" : "unavailable-time"} />
                <button className={availability[4][1] ? "available-time" : "unavailable-time"} />
                <button className={availability[4][2] ? "available-time" : "unavailable-time"} />
                <button className={availability[4][3] ? "available-time" : "unavailable-time"} />
                <button className={availability[4][4] ? "available-time" : "unavailable-time"} />
                <button className={availability[4][5] ? "available-time" : "unavailable-time"} />
                <button className={availability[4][6] ? "available-time" : "unavailable-time"} />
                <button className={availability[4][7] ? "available-time" : "unavailable-time"} />
                <button className={availability[4][8] ? "available-time" : "unavailable-time"} />
                <button className={availability[4][9] ? "available-time" : "unavailable-time"} />
                <button className={availability[4][10] ? "available-time" : "unavailable-time"} />
                <button className={availability[4][11] ? "available-time" : "unavailable-time"} />
                <button className={availability[4][12] ? "available-time" : "unavailable-time"} />
                <button className={availability[4][13] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="schedule-col">
                <label>Sat</label>
                <button className={availability[5][0] ? "available-time" : "unavailable-time"} />
                <button className={availability[5][1] ? "available-time" : "unavailable-time"} />
                <button className={availability[5][2] ? "available-time" : "unavailable-time"} />
                <button className={availability[5][3] ? "available-time" : "unavailable-time"} />
                <button className={availability[5][4] ? "available-time" : "unavailable-time"} />
                <button className={availability[5][5] ? "available-time" : "unavailable-time"} />
                <button className={availability[5][6] ? "available-time" : "unavailable-time"} />
                <button className={availability[5][7] ? "available-time" : "unavailable-time"} />
                <button className={availability[5][8] ? "available-time" : "unavailable-time"} />
                <button className={availability[5][9] ? "available-time" : "unavailable-time"} />
                <button className={availability[5][10] ? "available-time" : "unavailable-time"} />
                <button className={availability[5][11] ? "available-time" : "unavailable-time"} />
                <button className={availability[5][12] ? "available-time" : "unavailable-time"} />
                <button className={availability[5][13] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="schedule-col">
                <label>Sun</label>
                <button className={availability[6][0] ? "available-time" : "unavailable-time"} />
                <button className={availability[6][1] ? "available-time" : "unavailable-time"} />
                <button className={availability[6][2] ? "available-time" : "unavailable-time"} />
                <button className={availability[6][3] ? "available-time" : "unavailable-time"} />
                <button className={availability[6][4] ? "available-time" : "unavailable-time"} />
                <button className={availability[6][5] ? "available-time" : "unavailable-time"} />
                <button className={availability[6][6] ? "available-time" : "unavailable-time"} />
                <button className={availability[6][7] ? "available-time" : "unavailable-time"} />
                <button className={availability[6][8] ? "available-time" : "unavailable-time"} />
                <button className={availability[6][9] ? "available-time" : "unavailable-time"} />
                <button className={availability[6][10] ? "available-time" : "unavailable-time"} />
                <button className={availability[6][11] ? "available-time" : "unavailable-time"} />
                <button className={availability[6][12] ? "available-time" : "unavailable-time"} />
                <button className={availability[6][13] ? "available-time" : "unavailable-time"} />
            </div>
        </div>
    );
}

export default ScheduleView;