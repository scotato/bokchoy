import * as React from 'react'
import { HowToStep } from 'schema-dts'
import { Box, Heading, Text, OrderedList, ListItem } from '@chakra-ui/react'
import { useTemplate } from '../../hooks'

interface RecipeInstructionProps {
  instructions: HowToStep[]
}

export const RecipeInstructions = (props: RecipeInstructionProps) => {
  const { isLarge } = useTemplate()

  return (
    <Box px={isLarge ? 12 : 6} paddingTop={4} paddingBottom={8}>
      <Heading fontWeight="bold" fontSize={24} children="Instructions" />
      {Array.isArray(props.instructions) ? (
        <OrderedList>
          {props.instructions.map((instruction, i) => (
            <ListItem
              mb={4}
              children={instruction.text ?? instruction}
              key={i}
            />
          ))}
        </OrderedList>
      ) : (
        <Text>{props.instructions}</Text>
      )}
    </Box>
  )
}
