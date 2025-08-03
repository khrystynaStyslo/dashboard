import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import type { Chart } from '@/entities/chart'

export const BarChartBlock = (props: Chart) => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={props.xAxisKey} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={props.yAxisKey} fill="#10B981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
