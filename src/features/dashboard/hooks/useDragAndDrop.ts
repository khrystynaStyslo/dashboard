import { useState } from 'react'
import {
  DragEndEvent,
  DragStartEvent,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from '@dnd-kit/core'
import type { Position } from '@/shared/types'

export interface DragResult {
  blockId: string
  newPosition: Position
}

export function useDragAndDrop() {
  const [draggedBlockId, setDraggedBlockId] = useState<string | null>(null)

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 8,
    },
  })

  const sensors = useSensors(pointerSensor)

  const handleDragStart = (event: DragStartEvent) => {
    setDraggedBlockId(String(event.active.id))
  }

  const handleDragEnd = (event: DragEndEvent): DragResult | null => {
    setDraggedBlockId(null)

    const { active, over } = event

    if (!over) {
      return null
    }

    const blockId = String(active.id)
    const dropTargetId = String(over.id)

    const positionParts = dropTargetId.split('-')
    if (positionParts.length !== 2) {
      return null
    }

    const [row, col] = positionParts.map(Number)

    if (isNaN(row) || isNaN(col) || row < 0 || col < 0) {
      return null
    }

    return {
      blockId,
      newPosition: { row, col },
    }
  }

  const config = {
    sensors,
    collisionDetection: closestCenter,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd,
  }

  const isDragging = draggedBlockId !== null

  return {
    config,
    isDragging,
    draggedBlockId,
    handleDragStart,
    handleDragEnd,
  }
}
