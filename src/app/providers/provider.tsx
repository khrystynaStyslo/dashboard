import { DndContext, DragEndEvent } from '@dnd-kit/core'
import React, { createContext, useContext } from 'react'

import { DashboardContextType, DashboardProviderProps } from './types'

import { useDashboard, useDragAndDrop } from '@/features/dashboard'

const DashboardContext = createContext<DashboardContextType | null>(null)

export const DashboardProvider = (props: DashboardProviderProps) => {
  const { blocks, addBlock, deleteBlock, moveBlock, updateBlock } =
    useDashboard()
  const dnd = useDragAndDrop()

  const handleDragEnd = (event: DragEndEvent) => {
    const result = dnd.handleDragEnd(event)

    if (result) {
      moveBlock(result.blockId, result.newPosition)
    }
  }

  const contextValue = {
    blocks,
    isDragging: dnd.isDragging,
    draggedBlockId: dnd.draggedBlockId,
    addBlock,
    deleteBlock,
    moveBlock,
    updateBlock,
  }

  return (
    <DndContext
      sensors={dnd.config.sensors}
      collisionDetection={dnd.config.collisionDetection}
      onDragStart={dnd.handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <DashboardContext.Provider value={contextValue}>
        {props.children}
      </DashboardContext.Provider>
    </DndContext>
  )
}

export const useDashboardContext = (): DashboardContextType => {
  const context = useContext(DashboardContext)

  if (!context) {
    throw new Error(
      'useDashboardContext must be used within a DashboardProvider',
    )
  }

  return context
}
