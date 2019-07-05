import React from 'react'
import RootRoutes from './RootRoutes'
import { BrowserRouter as Router } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
      <RootRoutes />
    </Router>
  )
}

export default App
