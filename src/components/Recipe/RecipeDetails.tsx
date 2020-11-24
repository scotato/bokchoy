import * as React from 'react'
import { HStack, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'
import { AddIcon, CalendarIcon, TimeIcon, StarIcon } from '@chakra-ui/icons'
import { AggregateRating } from 'schema-dts'

interface RecipeDetailsProps {
  datePublished: string
  dateModified: string
  recipeYield: string[]
  prepTime: string
  cookTime: string
  totalTime: string
  aggregateRating?: AggregateRating
}

export const RecipeDetails = (props: RecipeDetailsProps) => {
  const {
    datePublished: published,
    dateModified: modified,
    prepTime,
    cookTime,
    totalTime,
    aggregateRating,
    recipeYield,
  } = props
  const date = recipeDate({ published, modified })
  const rating = aggregateRating?.ratingValue as number
  const ratingCount = aggregateRating?.ratingCount as number
  const yieldString = Array.isArray(recipeYield)
    ? recipeYield[recipeYield.length - 1]
    : recipeYield
  const times = []

  const formatTime = (time: string) =>
    time.replace('PT', '').replace('H', 'h ').replace('M', 'm')

  if (prepTime) times.push(`Prep: ${formatTime(prepTime)}`)
  if (cookTime) times.push(`Cook: ${formatTime(cookTime)}`)
  if (totalTime) times.push(`Total: ${formatTime(totalTime)}`)

  return (
    <HStack>
      {rating > 0 ? (
        <Tag colorScheme="yellow">
          <TagLeftIcon as={StarIcon} />
          <TagLabel>
            {Math.round(rating * 10) / 10}{' '}
            {ratingCount ? `(${ratingCount})` : null}
          </TagLabel>
        </Tag>
      ) : null}

      {date ? (
        <Tag colorScheme="orange">
          <TagLeftIcon as={CalendarIcon} />
          <TagLabel>{date}</TagLabel>
        </Tag>
      ) : null}

      {times.length ? (
        <Tag colorScheme="pink">
          <TagLeftIcon as={TimeIcon} />
          <TagLabel>{times.join(', ')}</TagLabel>
        </Tag>
      ) : null}

      {yieldString ? (
        <Tag colorScheme="purple">
          <TagLeftIcon as={AddIcon} />
          <TagLabel>{yieldString}</TagLabel>
        </Tag>
      ) : null}
    </HStack>
  )
}

function recipeDate(props: { published: string; modified: string }) {
  const { published, modified } = props
  const datePublished = published && new Date(published)
  const dateModified = modified && new Date(modified)
  const date = dateModified || datePublished
  return date ? date.toLocaleDateString() : undefined
}
