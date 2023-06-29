import './Employee.css'

export const Employee = ({name, job, image, team, primaryColor, ...props}) => {
    return (
        <div className='employee'>
            <div className='header-employee' style={{backgroundColor: primaryColor}}>
                <img src={image} alt={name} />
            </div>
            <div className='footer-employee'>
                <h4>{name}</h4>
                <h5>Estagiário</h5>
            </div>
        </div>
    )
}

