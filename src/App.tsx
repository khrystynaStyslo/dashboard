import React from 'react'

import { DashboardProvider } from '@/app/providers'
import { DashboardPage } from '@/pages/dashboard/page'

function App() {
  return (
    <DashboardProvider>
      <DashboardPage />
    </DashboardProvider>
  )
}

export default App
