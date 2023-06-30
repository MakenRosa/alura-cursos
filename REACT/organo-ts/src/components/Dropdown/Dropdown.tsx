import './Dropdown.css'

interface DropdownProps {
    label: string,
    items: string[],
    onChange: (value: string) => void,
    required?: boolean,
    value: string
}

export const Dropdown = ({label, items, onChange, required = false, value } :DropdownProps) => {
    return (
        <div className='dropdown'>
            <label>{label}</label>
            <select onChange={event => onChange(event.target.value)} required={required} value={value}>
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
