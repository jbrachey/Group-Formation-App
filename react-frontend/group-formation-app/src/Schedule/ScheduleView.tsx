import './schedule-styles.css';

const ScheduleView = (availability) => {
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
                <button className={availability['Monday'][0] ? "available-time" : "unavailable-time"} />
                <button className={availability['Monday'][1] ? "available-time" : "unavailable-time"} />
                <button className={availability['Monday'][2] ? "available-time" : "unavailable-time"} />
                <button className={availability['Monday'][3] ? "available-time" : "unavailable-time"} />
                <button className={availability['Monday'][4] ? "available-time" : "unavailable-time"} />
                <button className={availability['Monday'][5] ? "available-time" : "unavailable-time"} />
                <button className={availability['Monday'][6] ? "available-time" : "unavailable-time"} />
                <button className={availability['Monday'][7] ? "available-time" : "unavailable-time"} />
                <button className={availability['Monday'][8] ? "available-time" : "unavailable-time"} />
                <button className={availability['Monday'][9] ? "available-time" : "unavailable-time"} />
                <button className={availability['Monday'][10] ? "available-time" : "unavailable-time"} />
                <button className={availability['Monday'][11] ? "available-time" : "unavailable-time"} />
                <button className={availability['Monday'][12] ? "available-time" : "unavailable-time"} />
                <button className={availability['Monday'][13] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="schedule-col">
                <label>Tue</label>
                <button className={availability['Tuesday'][0] ? "available-time" : "unavailable-time"} />
                <button className={availability['Tuesday'][1] ? "available-time" : "unavailable-time"} />
                <button className={availability['Tuesday'][2] ? "available-time" : "unavailable-time"} />
                <button className={availability['Tuesday'][3] ? "available-time" : "unavailable-time"} />
                <button className={availability['Tuesday'][4] ? "available-time" : "unavailable-time"} />
                <button className={availability['Tuesday'][5] ? "available-time" : "unavailable-time"} />
                <button className={availability['Tuesday'][6] ? "available-time" : "unavailable-time"} />
                <button className={availability['Tuesday'][7] ? "available-time" : "unavailable-time"} />
                <button className={availability['Tuesday'][8] ? "available-time" : "unavailable-time"} />
                <button className={availability['Tuesday'][9] ? "available-time" : "unavailable-time"} />
                <button className={availability['Tuesday'][10] ? "available-time" : "unavailable-time"} />
                <button className={availability['Tuesday'][11] ? "available-time" : "unavailable-time"} />
                <button className={availability['Tuesday'][12] ? "available-time" : "unavailable-time"} />
                <button className={availability['Tuesday'][13] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="schedule-col">
                <label>Wed</label>
                <button className={availability['Wednesday'][0] ? "available-time" : "unavailable-time"} />
                <button className={availability['Wednesday'][1] ? "available-time" : "unavailable-time"} />
                <button className={availability['Wednesday'][2] ? "available-time" : "unavailable-time"} />
                <button className={availability['Wednesday'][3] ? "available-time" : "unavailable-time"} />
                <button className={availability['Wednesday'][4] ? "available-time" : "unavailable-time"} />
                <button className={availability['Wednesday'][5] ? "available-time" : "unavailable-time"} />
                <button className={availability['Wednesday'][6] ? "available-time" : "unavailable-time"} />
                <button className={availability['Wednesday'][7] ? "available-time" : "unavailable-time"} />
                <button className={availability['Wednesday'][8] ? "available-time" : "unavailable-time"} />
                <button className={availability['Wednesday'][9] ? "available-time" : "unavailable-time"} />
                <button className={availability['Wednesday'][10] ? "available-time" : "unavailable-time"} />
                <button className={availability['Wednesday'][11] ? "available-time" : "unavailable-time"} />
                <button className={availability['Wednesday'][12] ? "available-time" : "unavailable-time"} />
                <button className={availability['Wednesday'][13] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="schedule-col">
                <label>Thu</label>
                <button className={availability['Thursday'][0] ? "available-time" : "unavailable-time"} />
                <button className={availability['Thursday'][1] ? "available-time" : "unavailable-time"} />
                <button className={availability['Thursday'][2] ? "available-time" : "unavailable-time"} />
                <button className={availability['Thursday'][3] ? "available-time" : "unavailable-time"} />
                <button className={availability['Thursday'][4] ? "available-time" : "unavailable-time"} />
                <button className={availability['Thursday'][5] ? "available-time" : "unavailable-time"} />
                <button className={availability['Thursday'][6] ? "available-time" : "unavailable-time"} />
                <button className={availability['Thursday'][7] ? "available-time" : "unavailable-time"} />
                <button className={availability['Thursday'][8] ? "available-time" : "unavailable-time"} />
                <button className={availability['Thursday'][9] ? "available-time" : "unavailable-time"} />
                <button className={availability['Thursday'][10] ? "available-time" : "unavailable-time"} />
                <button className={availability['Thursday'][11] ? "available-time" : "unavailable-time"} />
                <button className={availability['Thursday'][12] ? "available-time" : "unavailable-time"} />
                <button className={availability['Thursday'][13] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="schedule-col">
                <label>Fri</label>
                <button className={availability['Friday'][0] ? "available-time" : "unavailable-time"} />
                <button className={availability['Friday'][1] ? "available-time" : "unavailable-time"} />
                <button className={availability['Friday'][2] ? "available-time" : "unavailable-time"} />
                <button className={availability['Friday'][3] ? "available-time" : "unavailable-time"} />
                <button className={availability['Friday'][4] ? "available-time" : "unavailable-time"} />
                <button className={availability['Friday'][5] ? "available-time" : "unavailable-time"} />
                <button className={availability['Friday'][6] ? "available-time" : "unavailable-time"} />
                <button className={availability['Friday'][7] ? "available-time" : "unavailable-time"} />
                <button className={availability['Friday'][8] ? "available-time" : "unavailable-time"} />
                <button className={availability['Friday'][9] ? "available-time" : "unavailable-time"} />
                <button className={availability['Friday'][10] ? "available-time" : "unavailable-time"} />
                <button className={availability['Friday'][11] ? "available-time" : "unavailable-time"} />
                <button className={availability['Friday'][12] ? "available-time" : "unavailable-time"} />
                <button className={availability['Friday'][13] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="schedule-col">
                <label>Sat</label>
                <button className={availability['Saturday'][0] ? "available-time" : "unavailable-time"} />
                <button className={availability['Saturday'][1] ? "available-time" : "unavailable-time"} />
                <button className={availability['Saturday'][2] ? "available-time" : "unavailable-time"} />
                <button className={availability['Saturday'][3] ? "available-time" : "unavailable-time"} />
                <button className={availability['Saturday'][4] ? "available-time" : "unavailable-time"} />
                <button className={availability['Saturday'][5] ? "available-time" : "unavailable-time"} />
                <button className={availability['Saturday'][6] ? "available-time" : "unavailable-time"} />
                <button className={availability['Saturday'][7] ? "available-time" : "unavailable-time"} />
                <button className={availability['Saturday'][8] ? "available-time" : "unavailable-time"} />
                <button className={availability['Saturday'][9] ? "available-time" : "unavailable-time"} />
                <button className={availability['Saturday'][10] ? "available-time" : "unavailable-time"} />
                <button className={availability['Saturday'][11] ? "available-time" : "unavailable-time"} />
                <button className={availability['Saturday'][12] ? "available-time" : "unavailable-time"} />
                <button className={availability['Saturday'][13] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="schedule-col">
                <label>Sun</label>
                <button className={availability['Sunday'][0] ? "available-time" : "unavailable-time"} />
                <button className={availability['Sunday'][1] ? "available-time" : "unavailable-time"} />
                <button className={availability['Sunday'][2] ? "available-time" : "unavailable-time"} />
                <button className={availability['Sunday'][3] ? "available-time" : "unavailable-time"} />
                <button className={availability['Sunday'][4] ? "available-time" : "unavailable-time"} />
                <button className={availability['Sunday'][5] ? "available-time" : "unavailable-time"} />
                <button className={availability['Sunday'][6] ? "available-time" : "unavailable-time"} />
                <button className={availability['Sunday'][7] ? "available-time" : "unavailable-time"} />
                <button className={availability['Sunday'][8] ? "available-time" : "unavailable-time"} />
                <button className={availability['Sunday'][9] ? "available-time" : "unavailable-time"} />
                <button className={availability['Sunday'][10] ? "available-time" : "unavailable-time"} />
                <button className={availability['Sunday'][11] ? "available-time" : "unavailable-time"} />
                <button className={availability['Sunday'][12] ? "available-time" : "unavailable-time"} />
                <button className={availability['Sunday'][13] ? "available-time" : "unavailable-time"} />
            </div>
        </div>
    );
}

export default ScheduleView;