import type { HTMLAttributes, ReactNode } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  narrow?: boolean
}

export function Container({ children, narrow = false, className = '', ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${narrow ? 'max-w-3xl' : 'max-w-6xl'} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
