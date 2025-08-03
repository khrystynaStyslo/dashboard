import { BlockData, createBlock } from '@/entities/block'
import type { Position } from '@/shared/types'
import { BLOCK_TYPES } from '@/shared/utils/constants'
import { findEmptyCell } from '@/shared/utils/gridUtils'

export class DashboardModel {
  private blocks: BlockData[] = []

  getState(): BlockData[] {
    return [...this.blocks]
  }

  get(id: string): BlockData | undefined {
    return this.blocks.find((block) => block.id === id)
  }

  add(type: BLOCK_TYPES) {
    const position = findEmptyCell(this.blocks)

    if (!position) {
      return false
    }

    const newBlock = createBlock(type, position)
    this.blocks = [...this.blocks, newBlock]
    return true
  }

  delete(id: string) {
    this.blocks = this.blocks.filter((block) => block.id !== id)
  }

  move(id: string, newPosition: Position) {
    const blockIndex = this.blocks.findIndex((block) => block.id === id)

    if (blockIndex === -1) {
      return false
    }

    const movingBlock = this.blocks[blockIndex]
    const currentPosition = movingBlock.position

    if (
      currentPosition.row === newPosition.row &&
      currentPosition.col === newPosition.col
    ) {
      return true
    }

    const targetBlock = this.blocks.find(
      (block) =>
        block.id !== id &&
        block.position.row === newPosition.row &&
        block.position.col === newPosition.col,
    )

    if (targetBlock) {
      return false
    }

    this.blocks = this.blocks.map((block) => {
      if (block.id === id) {
        return { ...block, position: newPosition }
      }
      return block
    })

    return true
  }

  update(id: string, updates: Partial<Omit<BlockData, 'type'>>) {
    const blockIndex = this.blocks.findIndex((block) => block.id === id)

    if (blockIndex === -1) {
      return false
    }

    this.blocks = this.blocks.map((block) => {
      if (block.id === id) {
        return {
          ...block,
          ...updates,
        } as BlockData
      }

      return block
    })
  }
}
