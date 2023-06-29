import './TextField.css'

export const TextField = ({label, onChange, placeholder=`Type your ${label.toLowerCase()}...`,required, value, ...props}) => {

    const onType = (event) => {
        onChange(event.target.value)
    }

    return (
        <div className="text-field" {...props}>
            <label>{label}</label>
            <input value={value} onChange={onType} placeholder={placeholder} required={required} />
        </div>
    )
}