import './Employee.css'

interface EmployeeProps {
    name: string,
    job: string,
    image: string,
    primaryColor: string
    date: string
}

export const Employee = ({date, image, job,name, primaryColor} : EmployeeProps) => {
    return (
        <div className='employee'>
            <div className='header-employee' style={{backgroundColor: primaryColor}}>
                <img src={image} alt={name} />
            </div>
            <div className='footer-employee'>
                <h4>{name}</h4>
                <h5>{job}</h5>
                <h5>{new Date(date).toLocaleDateString()}</h5>
            </div>
        </div>
    )
}
