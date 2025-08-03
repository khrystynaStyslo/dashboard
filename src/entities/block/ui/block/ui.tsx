import { useDraggable } from '@dnd-kit/core'
import React, { useRef } from 'react'

import type {
  BlockRootProps,
  BlockHeaderProps,
  BlockTitleProps,
  BlockDeleteButtonProps,
  BlockContentProps,
} from './types'

import { Button } from '@/shared/ui/button'

const Root = (props: BlockRootProps) => {
  const blockRef = useRef<HTMLDivElement>(null)
  const sizeRef = useRef<{ width: number; height: number } | null>(null)

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: props.block.id,
    })

  const combinedRef = (el: HTMLDivElement | null) => {
    setNodeRef(el)
    blockRef.current = el

    if (el && !sizeRef.current) {
      const rect = el.getBoundingClientRect()
      sizeRef.current = { width: rect.width, height: rect.height }
    }
  }

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    ...(isDragging &&
      sizeRef.current && {
        width: `${sizeRef.current.width}px`,
        height: `${sizeRef.current.height}px`,
      }),
  }

  return (
    <div
      ref={combinedRef}
      className={`block ${isDragging ? 'dragging' : ''}`}
      style={style}
      {...attributes}
      {...listeners}
    >
      {props.children}
    </div>
  )
}

const Header = (props: BlockHeaderProps) => {
  return <div className="block-header">{props.children}</div>
}

const Title = (props: BlockTitleProps) => {
  return <h3 className="block-title">{props.title}</h3>
}

const DeleteButton = (props: BlockDeleteButtonProps) => {
  return (
    <Button.Root
      variant="danger"
      onClick={() => props.onDelete(props.block.id)}
    >
      <Button.Icon>×</Button.Icon>
    </Button.Root>
  )
}

const Content = (props: BlockContentProps) => {
  return <div className="block-content">{props.children}</div>
}

export const Block = {
  Root,
  Header,
  Title,
  DeleteButton,
  Content,
}
