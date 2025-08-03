import { BlockData } from '@/entities/block'
import { Position } from '@/shared/types'
import { BLOCK_TYPES } from '@/shared/utils/constants'
import { ReactNode } from 'react'

export interface DashboardContextType {
  blocks: BlockData[]
  isDragging: boolean
  draggedBlockId: string | null
  addBlock: (type: BLOCK_TYPES) => void
  deleteBlock: (id: string) => void
  moveBlock: (id: string, position: Position) => void
  updateBlock: (id: string, updates: Partial<Omit<BlockData, 'type'>>) => void
}

export type DashboardProviderProps = {
  children: ReactNode
}
