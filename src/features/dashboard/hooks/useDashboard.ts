import { useState, useCallback } from 'react'
import { DashboardModel } from '../model'
import type { BlockData } from '@/entities/block'
import type { Position } from '@/shared/types'
import { BLOCK_TYPES } from '@/shared/utils/constants'

const model = new DashboardModel()

export function useDashboard() {
  const [blocks, setBlocks] = useState<BlockData[]>(() => model.getState())

  const sync = useCallback(() => {
    setBlocks(model.getState())
  }, [])

  const addBlock = useCallback(
    (type: BLOCK_TYPES) => {
      model.add(type)
      sync()
    },
    [sync],
  )

  const deleteBlock = useCallback(
    (id: string) => {
      model.delete(id)
      sync()
    },
    [sync],
  )

  const moveBlock = useCallback(
    (id: string, newPosition: Position) => {
      model.move(id, newPosition)
      sync()
    },
    [sync],
  )

  const updateBlock = useCallback(
    (id: string, updates: Partial<Omit<BlockData, 'type'>>) => {
      model.update(id, updates)
      sync()
    },
    [sync],
  )

  return {
    blocks,
    addBlock,
    deleteBlock,
    moveBlock,
    updateBlock,
  }
}
