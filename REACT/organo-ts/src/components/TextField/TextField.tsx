import { ChangeEvent } from 'react'
import './TextField.css'

interface TextFieldProps {
    label: string,
    onChange: (value: string) => void,
    placeholder?: string,
    type?: 'text' | 'date' | 'number' | 'email' | 'password' | 'tel' | 'url',
    required?: boolean,
    value: string
}

export const TextField = ({label, onChange, placeholder=`Type your ${label.toLowerCase()}...`, type = "text", required, value} :TextFieldProps) => {

    const onType = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{label}</label>
            <input
                onChange={onType}
                placeholder={placeholder}
                type={type}
                required={required} 
                value={value}
            />
        </div>
    )
}