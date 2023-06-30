import { IEmployee } from '../../shared/interface/IEmployee'
import Employee from '../Employee'
import './Team.css'

interface TeamProps {
    name: string,
    primaryColor: string,
    secondaryColor: string,
    employees: IEmployee[]
}

export const Team = ({name, primaryColor, secondaryColor, employees} :TeamProps) => {
    return ( 
    <>
        {employees.length > 0 &&
        <section className="team" style={{backgroundColor: secondaryColor}}>
            <h3 style={{ borderColor: primaryColor }}>
                {name}
            </h3>
            <div className='employees'>
                {
                    employees.map(employee => (
                        <Employee
                            date={employee.date}
                            image={employee.image}
                            job={employee.job}
                            key={employee.name}
                            name={employee.name}
                            primaryColor={primaryColor}
                        />
                    ))
                }
            </div>
        </section>
        }
    </>
    )
}