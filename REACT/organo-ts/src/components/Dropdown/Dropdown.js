import './Dropdown.css'

export const Dropdown = ({label, items, onChange, required, value, ...props }) => {
    return (
        <div className='dropdown'>
            <label>{label}</label>
            <select onChange={event => onChange(event.target.value)} required={required} value={value} {...props}>
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
