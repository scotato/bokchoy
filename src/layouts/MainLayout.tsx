import * as React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import { Navigator } from '../components/Navigator'
import { HeaderRoutes } from '../components/Routes'
import { useTemplate } from '../hooks'

interface MainLayoutProps {
  children?: React.ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
  React.useEffect(() => window.scrollTo(0, 0), [])
  const { columns, rows, areas } = useTemplate()

  return (
    <Grid
      minH="100vh"
      width="100%"
      margin="0 auto"
      templateColumns={columns}
      templateRows={rows}
      templateAreas={areas}
    >
      <Navigator gridArea="navigator" />
      <HeaderRoutes gridArea="header" />
      <Box gridArea="body" p={8} children={props.children} />
    </Grid>
  )
}
