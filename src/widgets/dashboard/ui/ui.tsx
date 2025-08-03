import React from 'react'

import { useDashboardContext } from '@/app/providers'
import { Grid } from '@/widgets/grid'
import { Toolbar } from '@/widgets/toolbar'

export function Dashboard() {
  const { blocks, addBlock, deleteBlock, isDragging, draggedBlockId } =
    useDashboardContext()

  return (
    <div>
      <Toolbar onAddBlock={addBlock} />
      <Grid
        blocks={blocks}
        onDeleteBlock={deleteBlock}
        isDragging={isDragging}
        draggedBlockId={draggedBlockId}
      />
    </div>
  )
}
