import './student-styles.css';

const StudentDisplayHeader = ({name}) => {
    return (
        <div className="header">
            <div className="header-contents">
                <label>{name}</label>
            </div>
        </div>
    )
}

export default StudentDisplayHeader;