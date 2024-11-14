import React, { ReactNode } from 'react'

interface ButtonProps {
  onClick?: () => void
  className?: string
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, className = '', children }) => {
  return (
    <button
      onClick={onClick}
      className={`select-none text-white bg-black hover:bg-gray-700 transition font-medium px-4 py-2 rounded ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
