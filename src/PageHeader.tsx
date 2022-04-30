import './page-header-styles.css';

const PageHeader = ({title, hasBackArrow}) => {
    return (
        <div>
            <h1 className="page-header">{title}</h1>
        </div>
    )
}

export default PageHeader;