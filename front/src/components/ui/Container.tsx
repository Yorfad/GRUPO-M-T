import type { HTMLAttributes, ReactNode } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  narrow?: boolean
}

export function Container({ children, narrow = false, className = '', ...props }: ContainerProps) {
  return (
    <div className={`container ${narrow ? 'container--narrow' : ''} ${className}`} {...props}>
      {children}
    </div>
  )
}
