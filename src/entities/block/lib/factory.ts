import {
  BlockData,
  LineChartBlock,
  BarChartBlock,
  TextBlockData,
} from '../model/types'
import { BLOCK_TYPES } from '@/shared/utils/constants'
import { Position } from '@/shared/types'

class BlockFactory {
  private static generateId = (): string => {
    return `block-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
  }

  private static generateMockChartData = () => {
    return Array.from({ length: 6 }, (_, i) => ({
      name: `Item ${i + 1}`,
      value: Math.floor(Math.random() * 100) + 10,
    }))
  }

  static lineChart(position: Position): LineChartBlock {
    return {
      id: this.generateId(),
      type: BLOCK_TYPES.LINE_CHART,
      position,
      title: 'Line Chart',
      data: {
        data: this.generateMockChartData(),
        xAxisKey: 'name',
        yAxisKey: 'value',
      },
    }
  }

  static barChart(position: Position): BarChartBlock {
    return {
      id: this.generateId(),
      type: BLOCK_TYPES.BAR_CHART,
      position,
      title: 'Bar Chart',
      data: {
        data: this.generateMockChartData(),
        xAxisKey: 'name',
        yAxisKey: 'value',
      },
    }
  }

  static textBlock(position: Position): TextBlockData {
    return {
      id: this.generateId(),
      type: BLOCK_TYPES.TEXT_BLOCK,
      position,
      title: 'Metrics',
      data: {
        title: 'Total Users',
        value: Math.floor(Math.random() * 10000) + 1000,
        description: 'Active users this month',
      },
    }
  }

  private static factories = {
    [BLOCK_TYPES.LINE_CHART]: this.lineChart,
    [BLOCK_TYPES.BAR_CHART]: this.barChart,
    [BLOCK_TYPES.TEXT_BLOCK]: this.textBlock,
  }

  static create(
    type: keyof typeof BlockFactory.factories,
    position: Position,
  ): BlockData {
    const factory = this.factories[type] as (position: Position) => BlockData

    if (!factory) {
      throw new Error(`Unknown block type: ${type}`)
    }

    return factory.call(this, position)
  }
}

export const createBlock = BlockFactory.create.bind(BlockFactory)
