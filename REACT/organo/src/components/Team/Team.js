import Employee from '../Employee'
import './Team.css'

export const Team = ({name, primaryColor, secondaryColor, employees, ...props}) => {
    return ( employees.length > 0 &&
        <section className="team" style={{backgroundColor: secondaryColor}}>
            <h3 style={{ borderColor: primaryColor }}>
                {name}
            </h3>
            <div className='employees'>
                {
                    employees.map(employee => (
                        <Employee
                            key={employee.name}
                            name={employee.name}
                            job={employee.job}
                            image={employee.image}
                            team={employee.team}
                            primaryColor={primaryColor}
                        />
                    ))
                }
            </div>
        </section>
    )
}