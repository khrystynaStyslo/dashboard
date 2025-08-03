import React from 'react'

import { ButtonRootProps, ButtonIconProps, ButtonTextProps } from './types'

const Root = (props: ButtonRootProps) => {
  const variantClasses = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    danger: 'btn btn-danger',
  }

  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={variantClasses[props.variant ?? 'primary']}
    >
      {props.children}
    </button>
  )
}

const Text = (props: ButtonTextProps) => {
  return <span>{props.children}</span>
}

const Icon = (props: ButtonIconProps) => {
  return <span className="btn-icon">{props.children}</span>
}

export const Button = {
  Root,
  Text,
  Icon,
}
