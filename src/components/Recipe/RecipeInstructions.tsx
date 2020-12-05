import * as React from 'react'
import { HowToStep, HowToSection } from 'schema-dts'
import { Box, Heading, Text, OrderedList, ListItem } from '@chakra-ui/react'
import { useTemplate } from '../../hooks'

interface RecipeInstructionProps {
  instructions: HowToStep[] | HowToSection[]
}

interface InstructionProps {
  items: HowToStep[]
}

const Instructions = (props: InstructionProps) =>
  Array.isArray(props.items) ? (
    <OrderedList>
      {props.items.map((instruction, i) => (
        <ListItem mb={4} children={instruction.text ?? instruction} key={i} />
      ))}
    </OrderedList>
  ) : (
    <Text children={props.items} />
  )

export const RecipeInstructions = (props: RecipeInstructionProps) => {
  const { isLarge } = useTemplate()
  const sections = props.instructions as HowToSection[]
  const instructions = props.instructions as HowToStep[]
  const hasSections =
    Array.isArray(sections) && sections.filter((s) => s?.itemListElement).length

  return (
    <Box px={isLarge ? 12 : 6} paddingTop={4} paddingBottom={8}>
      <Heading fontWeight="bold" fontSize={24} children="Instructions" />
      {hasSections ? (
        sections.map((section, i) => (
          <Box key={i}>
            <Heading fontSize={16} color="gray.500">
              {section.name}
            </Heading>
            <Instructions items={section.itemListElement as HowToStep[]} />
          </Box>
        ))
      ) : (
        <Instructions items={instructions} />
      )}
    </Box>
  )
}
