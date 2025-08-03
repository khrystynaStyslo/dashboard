import { ReactNode } from 'react'

export type ButtonRootProps = {
  children?: ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'danger'
}

export type ButtonTextProps = {
  children: ReactNode
}

export type ButtonIconProps = {
  children: ReactNode
}
