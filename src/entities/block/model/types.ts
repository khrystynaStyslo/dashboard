import type { Position } from '@/shared/types'
import { Chart } from '@/entities/chart'
import { Text } from '@/entities/text'
import { BLOCK_TYPES } from '@/shared/utils/constants'

type BaseBlock = {
  id: string
  position: Position
  title: string
}

export type LineChartBlock = BaseBlock & {
  type: typeof BLOCK_TYPES.LINE_CHART
  data: Chart
}

export type BarChartBlock = BaseBlock & {
  type: typeof BLOCK_TYPES.BAR_CHART
  data: Chart
}

export type TextBlockData = BaseBlock & {
  type: typeof BLOCK_TYPES.TEXT_BLOCK
  data: Text
}

export type BlockData = LineChartBlock | BarChartBlock | TextBlockData
