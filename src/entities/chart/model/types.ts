interface ChartData {
  name: string
  value: number
}

export interface Chart {
  data: ChartData[]
  xAxisKey: string
  yAxisKey: string
}
