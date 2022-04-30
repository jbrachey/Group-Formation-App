import { useParams } from "react-router";
import PageHeader from "../PageHeader";

const ProfessorCourseView = () => {
    const { user, courseID } = useParams();
    return (
        <div>
            <PageHeader title={courseID} hasBackArrow={false} />
        </div>
    )
}

export default ProfessorCourseView;