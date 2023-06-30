
import { ReactNode } from 'react'
import './Button.css'

interface ButtonProps {
    children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
    return (
        <button className="button">
            {children}
        </button>
    )
}