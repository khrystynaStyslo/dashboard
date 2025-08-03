export const GRID_CONFIG = {
  COLUMNS: 3,
  UNLIMITED_ROWS: true,
  GAP: 16,
}

export enum BLOCK_TYPES {
  LINE_CHART = 'line-chart',
  BAR_CHART = 'bar-chart',
  TEXT_BLOCK = 'text-block',
}

export const BLOCK_LABELS = {
  [BLOCK_TYPES.LINE_CHART]: 'Add Line Chart',
  [BLOCK_TYPES.BAR_CHART]: 'Add Bar Chart',
  [BLOCK_TYPES.TEXT_BLOCK]: 'Add Text Block',
}
