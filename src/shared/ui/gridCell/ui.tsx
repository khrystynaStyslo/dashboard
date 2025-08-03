import { useDroppable } from '@dnd-kit/core'
import React from 'react'

import {
  GridCellRootProps,
  GridContentProps,
  GridDropIndicatorProps,
  GridOverlayProps,
} from './types'

const Root = (props: GridCellRootProps) => {
  const positionId = `${props.position.row}-${props.position.col}`

  const { isOver, setNodeRef } = useDroppable({
    id: positionId,
    disabled: false,
  })

  return (
    <div
      ref={setNodeRef}
      data-position={positionId}
      className={`grid-cell ${!props.isEmpty ? 'has-block' : ''} ${isOver ? 'can-drop' : ''}`}
      style={{
        gridRow: props.position.row + 1,
        gridColumn: props.position.col + 1,
      }}
    >
      {props.children}
    </div>
  )
}

const Content = (props: GridContentProps) => {
  return <div className="grid-cell-content">{props.children}</div>
}

const DropIndicator = (props: GridDropIndicatorProps) => {
  if (!props.isOver) {
    return null
  }

  return <div className="drop-indicator">Drop here</div>
}

const Overlay = (props: GridOverlayProps) => {
  if (!props.isOver) {
    return null
  }

  return (
    <div className="grid-cell-overlay">
      {props.children || <DropIndicator isOver={props.isOver} />}
    </div>
  )
}

export const GridCell = {
  Root,
  Content,
  Overlay,
  DropIndicator,
}
