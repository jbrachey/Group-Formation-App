import './schedule-styles.css';

const ConciseScheduleView = ({availability}) => {
    const conciseAvailability = getConciseAvailability(availability);
    //console.log(conciseAvailability)
    return (
        <div className="concise-table-style">
            <div className="concise-times">
                <label>AM</label>
                <label className='bottom-time'>PM</label>
            </div>
            <div className="concise-schedule-col">
                <label>Mon</label>
                <button className={conciseAvailability[0] ? "available-time" : "unavailable-time"} />
                <button className={conciseAvailability[1] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="concise-schedule-col">
                <label>Tue</label>
                <button className={conciseAvailability[2] ? "available-time" : "unavailable-time"} />
                <button className={conciseAvailability[3] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="concise-schedule-col">
                <label>Wed</label>
                <button className={conciseAvailability[4] ? "available-time" : "unavailable-time"} />
                <button className={conciseAvailability[5] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="concise-schedule-col">
                <label>Thu</label>
                <button className={conciseAvailability[6] ? "available-time" : "unavailable-time"} />
                <button className={conciseAvailability[7] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="concise-schedule-col">
                <label>Fri</label>
                <button className={conciseAvailability[8] ? "available-time" : "unavailable-time"} />
                <button className={conciseAvailability[9] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="concise-schedule-col">
                <label>Sat</label>
                <button className={conciseAvailability[10] ? "available-time" : "unavailable-time"} />
                <button className={conciseAvailability[11] ? "available-time" : "unavailable-time"} />
            </div>
            <div className="concise-schedule-col">
                <label>Sun</label>
                <button className={conciseAvailability[12] ? "available-time" : "unavailable-time"} />
                <button className={conciseAvailability[13] ? "available-time" : "unavailable-time"} />
            </div>
        </div>
    )
}

const getConciseAvailability = (availability) => {
    let conciseAvailability: boolean[] = []
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    //console.log(availability)
    //console.log(days[0])
    //console.log("Single Day Test: ", availability['Monday'])
    //console.log(availability[days[0]])
    for (let day = 0; day < 7; day++) {
        let amHours = 0;
        for (let hour = 0; hour < 4; hour++) {
            if (availability[days[day]][hour]) {
                amHours++;
            }
        }
        if (amHours > 2) {
            conciseAvailability.push(true);
        } else {
            conciseAvailability.push(false);
        }
        let pmHours = 0;
        for (let hour = 4; hour < 14; hour++) {
            if (availability[days[day]][hour]) {
                pmHours++;
            }
        }
        if (pmHours > 5) {
            conciseAvailability.push(true);
        } else {
            conciseAvailability.push(false);
        }
    }
    return conciseAvailability;
}

export default ConciseScheduleView;