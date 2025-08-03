import React from 'react'

import { BlockData, Block } from '@/entities/block'
import { BarChartBlock, LineChartBlock, Chart } from '@/entities/chart'
import { TextBlock, Text } from '@/entities/text'
import { GridCell } from '@/shared/ui/gridCell'
import { GRID_CONFIG, BLOCK_TYPES } from '@/shared/utils/constants'
import { getPositionFromIndex, getRequiredRows } from '@/shared/utils/gridUtils'

type DashboardGridProps = {
  blocks: BlockData[]
  onDeleteBlock: (id: string) => void
  isDragging?: boolean
  draggedBlockId?: string | null
}

export const Grid = (props: DashboardGridProps) => {
  const renderMap = {
    [BLOCK_TYPES.LINE_CHART]: (data: Chart) => <LineChartBlock {...data} />,
    [BLOCK_TYPES.BAR_CHART]: (data: Chart) => <BarChartBlock {...data} />,
    [BLOCK_TYPES.TEXT_BLOCK]: (data: Text) => <TextBlock {...data} />,
  }

  const renderBlockContent = (block: BlockData) => {
    const render = renderMap[block.type as keyof typeof renderMap]
    if (!render) {
      return <div>Unknown block type</div>
    }

    return render(block.data as never)
  }

  const blocksMap = new Map(
    props.blocks.map((block) => [
      `${block.position.row}-${block.position.col}`,
      block,
    ]),
  )

  const renderCell = (index: number) => {
    const position = getPositionFromIndex(index)
    const key = `${position.row}-${position.col}`
    const block = blocksMap.get(key)

    const isBeingDragged = block && props.draggedBlockId === block.id
    const isEmpty = !block || Boolean(isBeingDragged)

    return (
      <GridCell.Root key={key} position={position} isEmpty={isEmpty}>
        {block && (
          <Block.Root
            key={block.id}
            block={block}
            onDelete={props.onDeleteBlock}
          >
            <Block.Header>
              <Block.Title title={block.title} />
              <Block.DeleteButton
                block={block}
                onDelete={props.onDeleteBlock}
              />
            </Block.Header>
            <Block.Content>{renderBlockContent(block)}</Block.Content>
          </Block.Root>
        )}
      </GridCell.Root>
    )
  }

  const requiredRows = Math.max(getRequiredRows(props.blocks), 3)

  return (
    <div
      className="dashboard-grid"
      style={{
        gridTemplateColumns: `repeat(${GRID_CONFIG.COLUMNS}, 1fr)`,
        gridTemplateRows: `repeat(${requiredRows}, minmax(200px, auto))`,
      }}
    >
      {Array.from({ length: requiredRows * GRID_CONFIG.COLUMNS }, (_, i) =>
        renderCell(i),
      )}
    </div>
  )
}
