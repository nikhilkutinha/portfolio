import clsx from 'clsx'
import * as React from 'react'

import { Spinner } from './Spinner'

const variants = {
  primary: 'text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-600',
  inverse: 'text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-600 border border-gray-300',
  danger: 'text-white bg-danger-600 hover:bg-danger-700 focus:ring-danger-600',
}

const sizes = {
  sm: 'p-2 text-sm',
  md: 'py-2 px-4 text-md',
  lg: 'py-3 px-6 text-lg',
}

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined }

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  isLoading?: boolean
} & IconProps

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'flex items-center justify-center rounded font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Spinner size="sm" variant="light" />}
        {!isLoading && startIcon}
        <span className="mx-2">{props.children}</span> {!isLoading && endIcon}
      </button>
    )
  }
)

Button.displayName = 'Button'
