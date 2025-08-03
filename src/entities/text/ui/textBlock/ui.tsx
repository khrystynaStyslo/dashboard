import React from 'react'

import type { Text } from '@/entities/text'

export function TextBlock(props: Text) {
  return (
    <div className="text-block">
      <h4 className="text-block-title">{props.title}</h4>
      <div className="text-block-value">{props.value}</div>
      {props.description && (
        <p className="text-block-description">{props.description}</p>
      )}
    </div>
  )
}
