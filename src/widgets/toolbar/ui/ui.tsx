import React from 'react'

import { Button } from '@/shared/ui/button'
import { BLOCK_TYPES, BLOCK_LABELS } from '@/shared/utils/constants'

type BlockToolbarProps = {
  onAddBlock: (type: BLOCK_TYPES) => void
}

export const Toolbar = (props: BlockToolbarProps) => {
  return (
    <div className="toolbar">
      <h2 className="toolbar-title">Dashboard</h2>

      <div className="toolbar-buttons">
        <Button.Root
          onClick={() => props.onAddBlock(BLOCK_TYPES.LINE_CHART)}
          variant="primary"
        >
          <Button.Text>{BLOCK_LABELS[BLOCK_TYPES.LINE_CHART]}</Button.Text>
        </Button.Root>

        <Button.Root
          onClick={() => props.onAddBlock(BLOCK_TYPES.BAR_CHART)}
          variant="primary"
        >
          <Button.Text>{BLOCK_LABELS[BLOCK_TYPES.BAR_CHART]}</Button.Text>
        </Button.Root>

        <Button.Root
          onClick={() => props.onAddBlock(BLOCK_TYPES.TEXT_BLOCK)}
          variant="primary"
        >
          <Button.Text>{BLOCK_LABELS[BLOCK_TYPES.TEXT_BLOCK]} </Button.Text>
        </Button.Root>
      </div>
    </div>
  )
}
