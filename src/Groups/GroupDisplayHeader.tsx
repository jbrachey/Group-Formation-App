import './group-styles.css';

const GroupDisplayHeader = ({name, numStudents, totalStudents}) => {
    return (
        <div className="header">
            <div className="header-contents">
                {/*<label className='students-count'>{numStudents} / {totalStudents}</label>*/}
                <label className="team-name">{name}</label>
            </div>
        </div>
    )
}

export default GroupDisplayHeader;