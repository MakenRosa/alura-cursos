import './Employee.css'

export const Employee = ({name, job, image, primaryColor, ...props}) => {
    return (
        <div className='employee' {...props}>
            <div className='header-employee' style={{backgroundColor: primaryColor}}>
                <img src={image} alt={name} />
            </div>
            <div className='footer-employee'>
                <h4>{name}</h4>
                <h5>{job}</h5>
            </div>
        </div>
    )
}

