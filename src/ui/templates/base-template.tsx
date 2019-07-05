import React from 'react'
import { Box, Grid } from '../atoms'
import { Footer, Header } from '../organisms'

export const BaseTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid
      gridTemplateColumns="100%"
      gridTemplateRows="auto 1fr auto"
      minHeight="100vh"
    >
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Grid>
  )
}
