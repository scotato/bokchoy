import * as React from "react"
import { Link } from "react-router-dom"
import { HStack, Button } from "@chakra-ui/react"

export const Home = () => (
  <HStack spacing={5} p={9}>
    <Link to="/recipe"><Button>Recipe</Button></Link>
    <Link to="/debug"><Button>Debug</Button></Link>
  </HStack>
)
