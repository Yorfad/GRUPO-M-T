import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hoverable?: boolean
}

export function Card({ children, hoverable = false, className = '', ...props }: CardProps) {
  return (
    <div
      className={`card ${hoverable ? 'card--hoverable' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
