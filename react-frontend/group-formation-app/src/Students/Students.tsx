import { useParams } from "react-router";
import StudentDisplay from "./StudentDisplay";
import BottomNav from "../BottomNav";
import PageHeader from "../PageHeader";

const Students = () => {
    const { user, courseID } = useParams();
    const students = getStudents(courseID);
    return (
        <div>
            <PageHeader title={"Available Students"} hasBackArrow={false} />
            <ul>
                {students.map(student => {
                    return (
                    <li key={student.studentID}>
                        <StudentDisplay studentID={student.studentID} name={student.name} major={student.major} year={student.year} availability={student.availability}/>
                    </li>
                    )
                })}
            </ul>
            <BottomNav/>
        </div>

    )
}

const getStudents = (courseID) => {
    // will be backend api call, for now dummy data
    let availability: boolean[][] = [];
    for (let days = 0; days < 7; days++) {
        let dayArr: boolean[] = []
        for (let hour = 0; hour < 14; hour++) {
            if (hour + days == 2 || hour + days == 14) {
                dayArr.push(true);
            } else {
                dayArr.push(false);
            }
        }
        availability.push(dayArr);
    }
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