import * as React from "react"
import { Link } from "react-router-dom"
import { Flex, HStack, Button, Grid } from "@chakra-ui/react"
import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import { Logo } from '../components/Logo'

interface MainLayoutProps {
  children?: React.ReactNode
}

export const MainLayout = (props: MainLayoutProps) => (
  <Grid minH="100vh" maxW="100vw" templateRows="auto 1fr" p={9}>
    <Flex spacing={5} mb={9} alignItems="center">
      <HStack>
        <Link to="/"><Logo w="64px" h="64px" alt="bokchoy" /></Link>
        <Link to="/recipe"><Button>Recipe</Button></Link>
        <Link to="/debug"><Button>Debug</Button></Link>
      </HStack>
      <ColorModeSwitcher ml="auto" />
    </Flex>
    <Grid>
      {props.children}
    </Grid>
  </Grid>
)
