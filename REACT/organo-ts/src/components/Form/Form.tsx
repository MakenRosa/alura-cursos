import { FormEvent, useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import TextField from '../TextField'
import './Form.css'
import { IEmployee } from '../../shared/interface/IEmployee'

interface FormProps {
    onRegisterEmployee: (employee: IEmployee) => void
    teams: string[]
}

export const Form = ({onRegisterEmployee, teams} :FormProps) => {

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState(teams[0])
    const [date, setDate] = useState('')

    const onSave = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onRegisterEmployee({name, job, image, team, date})
        cleanForm()
    }

    const cleanForm = () => {
        setName('')
        setJob('')
        setImage('')
        setTeam(teams[0])
        setDate('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Fill in the data to create the employee card</h2>
                <TextField 
                    label="Name" 
                    onChange={ value => setName(value) }
                    required={true} 
                    value={name}
                />
                <TextField
                    label="Job"
                    onChange={ value => setJob(value) }
                    required={true} 
                    value={job}
                />
                <TextField
                    label="Image"
                    onChange={ value => setImage(value) }
                    placeholder='Type image url...'
                    type='url'
                    value={image}
                />
                <TextField
                    label="Entry Date"
                    onChange={ value => setDate(value) }
                    type='date'
                    value={date}
                />
                <Dropdown
                    items={teams}
                    label="Teams"
                    onChange={ value => setTeam(value) }
                    required={true}
                    value={team}
                />
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

