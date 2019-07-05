import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Routes } from './routes'

import MainPage from './pages/main'
import PaymentPage from './pages/payment'

const RootRoutes = () => {
  return (
    <Switch>
      <Route path={Routes.root} exact component={MainPage} />
      <Route path={Routes.payment} exact component={PaymentPage} />
    </Switch>
  )
}

export default RootRoutes
