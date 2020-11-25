import * as React from 'react'
import { HowToStep } from 'schema-dts'
import { Heading, OrderedList, ListItem } from '@chakra-ui/react'
import { Card } from '../Card'

interface RecipeInstructionProps {
  instructions: HowToStep[]
}

export const RecipeInstructions = (props: RecipeInstructionProps) => {
  return (
    <Card py={6} px={8}>
      <Heading fontWeight="bold" fontSize={24} children="Instructions" />
      <OrderedList>
        {props.instructions.map((instruction, i) => (
          <ListItem mb={4} children={instruction.text} key={i} />
        ))}
      </OrderedList>
    </Card>
  )
}
