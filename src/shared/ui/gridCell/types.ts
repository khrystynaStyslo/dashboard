import { Position } from '@/shared/types'
import { ReactNode } from 'react'

export type GridCellRootProps = {
  position: Position
  isEmpty: boolean
  children?: ReactNode
}

export type GridContentProps = {
  children?: ReactNode
}

export type GridDropIndicatorProps = {
  isOver: boolean
}

export type GridOverlayProps = {
  children?: ReactNode
  isOver: boolean
}
