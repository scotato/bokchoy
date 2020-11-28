import * as React from 'react'
import { Box, Grid, Heading, useColorModeValue } from '@chakra-ui/react'

interface HeaderProps {
  title: string
  primary?: JSX.Element
  secondary?: JSX.Element
}

export const Header = (props: HeaderProps) => {
  const borderColor = useColorModeValue('gray.200', 'gray.800')

  return (
    <Grid
      paddingX={8}
      paddingY={4}
      placeItems="center"
      templateColumns="1fr 1fr 1fr"
      borderBottomColor={borderColor}
      borderBottomWidth={2}
    >
      <Box children={props.primary} justifySelf="flex-start" />
      <Heading fontSize={20}>{props.title}</Heading>
      <Box children={props.secondary} justifySelf="flex-end" />
    </Grid>
  )
}
