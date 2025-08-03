import { BlockData } from '@/entities/block'
import { GRID_CONFIG } from '@/shared/utils/constants'
import type { Position } from '@/shared/types'

const Grid = {
  key: ({ row, col }: Position) => `${row}-${col}`,

  maxRow: (blocks: BlockData[]) =>
    blocks.reduce((max, b) => Math.max(max, b.position.row), -1),

  occupied: (blocks: BlockData[]) =>
    new Set(blocks.map((b) => Grid.key(b.position))),

  positions: (maxRow: number) => {
    const positions = []
    for (let row = 0; row <= maxRow + 1; row++) {
      for (let col = 0; col < GRID_CONFIG.COLUMNS; col++) {
        positions.push({ row, col })
      }
    }
    return positions
  },

  fromIndex: (index: number): Position => ({
    row: Math.floor(index / GRID_CONFIG.COLUMNS),
    col: index % GRID_CONFIG.COLUMNS,
  }),
}

export const findEmptyCell = (blocks: BlockData[]): Position | null => {
  const occupied = Grid.occupied(blocks)
  const maxRow = Grid.maxRow(blocks)

  for (const pos of Grid.positions(maxRow)) {
    if (!occupied.has(Grid.key(pos))) return pos
  }

  return null
}

export const getPositionFromIndex = Grid.fromIndex
export const getRequiredRows = (blocks: BlockData[]) =>
  Grid.maxRow(blocks) + 1 || 1
