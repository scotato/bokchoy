import * as React from 'react'
import { HowToStep } from 'schema-dts'
import { Box, Heading, OrderedList, ListItem } from '@chakra-ui/react'

interface RecipeInstructionProps {
  instructions: HowToStep[]
}

export const RecipeInstructions = (props: RecipeInstructionProps) => {
  return (
    <Box px={12} paddingTop={4} paddingBottom={8}>
      <Heading fontWeight="bold" fontSize={24} children="Instructions" />
      <OrderedList>
        {props.instructions.map((instruction, i) => (
          <ListItem mb={4} children={instruction.text} key={i} />
        ))}
      </OrderedList>
    </Box>
  )
}
