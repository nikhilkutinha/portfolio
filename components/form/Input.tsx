import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 sm:text-sm"
    />
  )
}
