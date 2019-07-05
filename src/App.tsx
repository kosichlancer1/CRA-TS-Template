import React, { Fragment } from 'react'
import RootRoutes from './RootRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from 'services/theme'

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <RootRoutes />
        </Fragment>
      </ThemeProvider>
    </Router>
  )
}

export default App
