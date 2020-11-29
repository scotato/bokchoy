import * as React from 'react'
import { Box, Grid, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Navigator } from '../components/Navigator'
import { HeaderRoutes } from '../components/Routes'
import { useTemplate } from '../hooks'

interface MainLayoutProps {
  children?: React.ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
  React.useEffect(() => window.scrollTo(0, 0), [])
  const { columns, rows, areas, size, sidebarWidth = 0 } = useTemplate()
  const isLarge = size === 'large'
  const navigatorColor = useColorModeValue(
    isLarge ? 'gray.200' : 'white',
    isLarge ? 'gray.800' : 'gray.900'
  )
  const borderColor = useColorModeValue('gray.200', 'gray.800')
  const bodyColor = useColorModeValue('white', 'gray.900')

  return (
    <Grid
      minH="100vh"
      width="100%"
      margin="0 auto"
      templateColumns={columns}
      templateRows={rows}
      templateAreas={areas}
    >
      <Navigator
        gridArea="navigator"
        position="fixed"
        paddingY={isLarge ? 8 : 4}
        width={isLarge ? sidebarWidth : '100%'}
        left={0}
        right={isLarge ? 'auto' : 0}
        top={isLarge ? 0 : 'auto'}
        bottom={0}
        zIndex={1}
        bg={navigatorColor}
        height={isLarge ? '100%' : '74px'}
        borderTopColor={borderColor}
        borderTopWidth={isLarge ? 0 : 2}
      />
      <Box
        gridArea="header"
        bg={bodyColor}
        position="fixed"
        top={0}
        left={sidebarWidth}
        right={0}
        zIndex={1}
      >
        <HeaderRoutes />
      </Box>
      <Box gridArea="body" bg={bodyColor} children={props.children} />
    </Grid>
  )
}
