import * as React from 'react'
import { Flex, HStack, Grid } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import { Logo } from '../components/Logo'
import { Link } from '../components/Link'

interface RecipeLayoutProps {
  children?: React.ReactNode
}

export const RecipeLayout = (props: RecipeLayoutProps) => {
  React.useEffect(() => window.scrollTo(0, 0), [])

  return (
    <Grid
      minH="100vh"
      width={['100%', '100%', '100%', '100%', 'calc(100vw * 0.618)']}
      maxWidth="1600px"
      margin="0 auto"
      templateRows="auto 1fr"
      p={9}
    >
      <Flex spacing={5} mb={9} alignItems="center">
        <HStack>
          <Link to="/">
            <Logo w="48px" h="48px" alt="bokchoy" />
          </Link>
        </HStack>
        <ColorModeSwitcher ml="auto" />
      </Flex>
      <Grid>{props.children}</Grid>
    </Grid>
  )
}
