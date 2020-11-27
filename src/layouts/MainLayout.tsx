import * as React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import { Navigator } from '../components/Navigator'

interface MainLayoutProps {
  children?: React.ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
  React.useEffect(() => window.scrollTo(0, 0), [])

  return (
    <Grid
      minH="100vh"
      width="100%"
      margin="0 auto"
      templateColumns={['1fr', '1fr', '256px 1fr', '256px 1fr', '256px 1fr']}
    >
      <Navigator />
      <Box p={8} children={props.children} />
    </Grid>
  )
}
