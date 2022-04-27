import { useParams } from "react-router";
import StudentDisplay from "./StudentDisplay";
import BottomNav from "../BottomNav";

const Students = () => {
    const { user, courseID } = useParams();
    const students = getStudents(courseID);
    return (
        <div>
            <h1 className="App-header App-h1">Available Students</h1>
            {students.map(student => {
                return (
                <li key={student.studentID}>
                    <StudentDisplay studentID={student.studentID} name={student.name} major={student.major} year={student.year} availability={student.availability}/>
                </li>
                )
            })}
            <BottomNav/>
        </div>

    )
}

const getStudents = (courseID) => {
    // will be backend api call, for now dummy data
    const availability = [true, false, true, true];
    const student1 = {
        studentID: 1,
        name: "Parker Jones",
        major: "Computer science",
        year: "2nd",
        availability: availability
    };
    const student2 = {
        studentID: 2,
        name: "Jose Alvarado",
        major: "Business",
        year: "4th",
        availability: availability
    };
    const student3 = {
        studentID: 3,
        name: "Ben",
        major: "ME",
        year: "Junior",
        availability: availability
    };
    return [student1, student2, student3];
}

export default Students;