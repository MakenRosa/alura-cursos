import { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import TextField from '../TextField'
import './Form.css'

export const Form = ({onRegisterEmployee, teams, ...props}) => {

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState(teams[0])

    const onSave = (event) => {
        event.preventDefault()
        onRegisterEmployee({name, job, image, team})
        cleanForm()
    }

    const cleanForm = () => {
        setName('')
        setJob('')
        setImage('')
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
                    value={image}
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

